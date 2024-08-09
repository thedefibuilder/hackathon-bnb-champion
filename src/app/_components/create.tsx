"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";

import type { ETemplateName } from "@/lib/templates";
import type { Address } from "viem";
import type { z } from "zod";

import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { erc20Abi, parseUnits } from "viem";
import { getChainConfig, paymentChains } from "@/lib/chains";
import { checkoutAddress } from "@/lib/constants/checkout";
import { calculateTotalPrice } from "@/lib/features";
import useWriteContract from "@/lib/hooks/use-write-contract";
import {
  createProjectRoutes,
  ECreateProjectStepName,
} from "@/lib/routes/forms/create-project";
import { createProjectSchema } from "@/lib/schemas/create-project";

import { templates } from "@/lib/templates";
import { TFontItem } from "@/lib/server-actions";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step, Stepper } from "./stepper";
import { Container } from "../../components/common/grid";
import { useToast } from "@/components/ui/use-toast";
import ChooseTemplate from "./choose-template";
import ProjectConfig from "./project-config/project-config";
import Customize from "./customize/customize";
import ProjectReview from "./review/review";
import { api } from "@/providers/trpc";
import { ToastAction } from "@radix-ui/react-toast";
import SuccessToastContent from "@/components/common/success-toast-content";
import StyledLink from "@/components/common/styled-link";

export type TCreateProps = {
  fonts?: TFontItem[];
};

export default function Create({ fonts }: TCreateProps) {
  const { toast, dismiss } = useToast();
  const [testnetMode, setTestnetMode] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const createProjectForm = useForm<z.infer<typeof createProjectSchema>>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: "",
      chainId: undefined,
      contracts: {},
      checkout: {
        paymentMethod: {
          chainId: paymentChains[0].network.id,
          currency: paymentChains[0].paymentCurrencies[0]?.address,
          currencyDecimals: paymentChains[0].paymentCurrencies[0]?.decimals,
        },
      },
    },
  });

  const paymentChainId = createProjectForm.watch(
    "checkout.paymentMethod.chainId",
  );
  const paymentChain = useMemo(
    () =>
      paymentChains.find((chain) => chain.network.id === paymentChainId) ??
      paymentChains[0],
    [paymentChainId],
  );
  const createProject = api.project.create.useMutation();
  const {
    isLoading: isPaymentLoading,
    errorMessage: paymentError,
    response: paymentResponse,
    writeContract: writeTransferPayment,
  } = useWriteContract(paymentChain);

  useEffect(() => {
    if (createProject.isError || paymentError) {
      toast({
        title: "Project Error",
        description:
          paymentError?.message ??
          createProject.error?.message ??
          "Could not create project",
        variant: "destructive",
      });
    } else if (createProject.isSuccess) {
      toast({
        title: "Success",
        description: <SuccessToastContent successText="Project created" />,
        action: (
          <ToastAction altText="Go to dashboard">
            <StyledLink variant="default" href="" onClick={() => dismiss()}>
              Go to Dashboard
            </StyledLink>
          </ToastAction>
        ),
      });
      redirect("/create");
    }
  }, [createProject.isError, createProject.isSuccess, paymentError]);

  useEffect(() => {
    const formValues = createProjectForm.getValues();
    if (!formValues.checkout?.paymentMethod.currency || !paymentResponse?.hash)
      return;
    createProject.mutate({
      ...formValues,
      checkout: {
        ...formValues.checkout,
        txHash: paymentResponse?.hash,
      },
    });
  }, [paymentResponse?.hash]);

  function onTemplateClick(template: ETemplateName) {
    const selectedTemplate = templates.find((t) => t.name === template);
    if (!selectedTemplate) return;
    scrollToTop();

    createProjectForm.setValue(
      "contracts",
      Object.fromEntries(
        selectedTemplate.contracts.map((contract) => [
          contract.moduleName,
          new Set(contract.featureNames),
        ]),
      ),
    );
  }

  async function triggerCreateProject() {
    const formValues = createProjectForm.getValues();
    if (!formValues.checkout?.paymentMethod.currency) return;
    const chain = getChainConfig(formValues.chainId);
    const paymentAmount = chain?.network.testnet
      ? 0n
      : parseUnits(
          calculateTotalPrice(formValues.contracts).toFixed(2),
          formValues.checkout.paymentMethod.currencyDecimals,
        );

    if (paymentAmount > 0n) {
      await writeTransferPayment(
        erc20Abi,
        "transfer",
        [checkoutAddress, paymentAmount],
        formValues.checkout.paymentMethod.currency as Address,
      );
    } else {
      createProject.mutate(formValues);
    }
  }

  const toggleTestnetSwitch = () => {
    setTestnetMode((prev) => !prev);
    createProjectForm.resetField("chainId");
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (Object.keys(createProjectForm.formState.errors).length > 0) {
      scrollToTop();
    }
  }, [createProjectForm.formState.errors]);

  return (
    <Container variant="fluid">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <NewsletterSuspense />
      </Suspense> */}
      <div ref={topRef} className="absolute left-0 top-0 h-0 w-full"></div>
      <Form {...createProjectForm}>
        <form>
          <div className="h-10" />
          <Stepper
            initialStep={0}
            steps={createProjectRoutes}
            onClickStep={async (step, setStep) => {
              const projectConfigStepIndex = 1;
              if (
                currentStepIndex <= projectConfigStepIndex &&
                step > projectConfigStepIndex
              ) {
                await createProjectForm.trigger("name");
                await createProjectForm.trigger("chainId");
                await createProjectForm.trigger("contracts");

                if (
                  Object.keys(createProjectForm.formState.errors).length ===
                    0 &&
                  createProjectForm.formState.isDirty
                ) {
                  setStep(step);
                  setCurrentStepIndex(step);
                }
              } else {
                setStep(step);
                setCurrentStepIndex(step);
              }
            }}
          >
            {createProjectRoutes.map((stepProps, index) => (
              <Step key={stepProps.name} {...stepProps} index={index}>
                <div className="h-10" />

                {(() => {
                  switch (stepProps.name) {
                    case ECreateProjectStepName.chooseTemplate:
                      return (
                        <ChooseTemplate onTemplateClick={onTemplateClick} />
                      );
                    case ECreateProjectStepName.projectConfig:
                      return (
                        <ProjectConfig
                          form={createProjectForm}
                          testnetMode={testnetMode}
                          toggleTestnetSwitch={toggleTestnetSwitch}
                          scrollToTop={scrollToTop}
                        />
                      );
                    case ECreateProjectStepName.customize:
                      return <div>step3</div>;

                    case ECreateProjectStepName.review:
                      return <div>step4</div>;
                    default:
                      return null;
                  }
                })()}
              </Step>
            ))}
          </Stepper>
        </form>
      </Form>
    </Container>
  );
}

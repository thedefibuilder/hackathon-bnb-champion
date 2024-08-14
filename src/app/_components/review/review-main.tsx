import React, { useEffect, useCallback } from "react";

import type { EModuleName } from "@/lib/modules";
import type { TReviewProps } from "./review";

import Image from "next/image";

import { Col, Row } from "@/components/common/grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getModuleFeatureConfig } from "@/lib/features";
import { cn } from "@/lib/utils";
import ButtonSpinner from "@/components/common/button-spinner";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { ThemeName } from "@/lib/hooks/use-dapp-colors";

export type SocialOptions = {
  Facebook?: string;
  X?: string;
  Discord?: string;
  Github?: string;
  Instagram?: string;
};

type TDappSettings = {
  projectName: string;
  colorOption: ThemeName;
  fontOption: string;
  socialOption: SocialOptions;
};

export default function ReviewMain({
  form,
  isCreating,
  testnetMode,
  triggerCreateProject,
}: TReviewProps) {
  const contracts = form.watch("contracts");
  const colorOption = form.watch("dapp.colorOption");
  const fontOption = form.watch("dapp.fontOption");
  const socialOption = form.watch("dapp.socialOption");
  const projectName = form.watch("name");

  const defaultAccordionValue = Object.keys(contracts)[0];
  const [storedSettings, setStoredSettings] = useLocalStorage<TDappSettings>(
    "dappSettings",
    {
      projectName: "",
      colorOption: "Twilight",
      fontOption: "",
      socialOption: {},
    },
  );

  const updateLocalStorage = useCallback(() => {
    const newSettings: TDappSettings = {
      projectName:
        projectName || (storedSettings ? storedSettings.projectName : ""),
      colorOption:
        colorOption ||
        (storedSettings ? storedSettings.colorOption : "Twilight"),
      fontOption:
        fontOption || (storedSettings ? storedSettings.fontOption : ""),
      socialOption:
        socialOption || (storedSettings ? storedSettings.socialOption : {}),
    };
    setStoredSettings(newSettings);
  }, [
    projectName,
    colorOption,
    fontOption,
    socialOption,
    storedSettings,
    setStoredSettings,
  ]);

  const handleCreateProject = () => {
    updateLocalStorage();
    triggerCreateProject();
  };

  return (
    <Row className="relative flex">
      <Col lg={7} lgOffset={5}>
        <Image
          src="/macbook-review.svg"
          alt="macbook-review"
          width={400}
          height={200}
          className="w-full lg:absolute lg:-left-20 lg:top-2 lg:w-4/6"
        />
        <div className="md:h-10" />
        <div
          className={cn(
            "rounded-[14px] border border-purple-500 bg-template-card-gradient px-8 lg:relative lg:z-40 lg:min-h-[610px]",
            "flex flex-col justify-between",
          )}
        >
          <Accordion
            type="single"
            collapsible
            className="mt-4"
            defaultValue={defaultAccordionValue}
          >
            {Object.entries(contracts).map(([moduleName, featureNames]) => (
              <AccordionItem
                key={moduleName}
                value={moduleName}
                className="border-none"
              >
                <AccordionTrigger className="text-lg font-bold">
                  {moduleName}
                </AccordionTrigger>

                {[...featureNames]
                  .sort((a, b) => {
                    const featureA = getModuleFeatureConfig(
                      moduleName as EModuleName,
                      a,
                    );
                    const featureB = getModuleFeatureConfig(
                      moduleName as EModuleName,
                      b,
                    );
                    return (featureA?.price ?? 0) - (featureB?.price ?? 0);
                  })
                  .map((feature, featureIndex) => {
                    const featureConfig = getModuleFeatureConfig(
                      moduleName as EModuleName,
                      feature,
                    );
                    if (!featureConfig) return null;

                    return (
                      <AccordionContent
                        key={featureIndex}
                        className="flex w-full items-center justify-between pb-4"
                      >
                        <div className="flex items-center gap-2">
                          {featureConfig.icon && (
                            <featureConfig.icon
                              className={cn([
                                "h-7 w-7 shrink-0 text-purple-500",
                              ])}
                            />
                          )}
                          <p className="text-sm font-bold">
                            {featureConfig.name}
                          </p>
                        </div>
                        <p className="text-sm font-bold">
                          {testnetMode || featureConfig.price === 0
                            ? "Free"
                            : `${featureConfig.price} $`}
                        </p>
                      </AccordionContent>
                    );
                  })}
              </AccordionItem>
            ))}
          </Accordion>

          <div className="h-8" />
          <ButtonSpinner
            onClick={handleCreateProject}
            className="mb-8 h-14 w-full rounded text-xl"
            isLoading={isCreating}
            defaultContent={"Confirm"}
            loadingContent="Creating..."
            type="button"
            variant="default"
          />
        </div>
      </Col>
    </Row>
  );
}

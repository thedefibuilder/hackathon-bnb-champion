/* eslint-disable unicorn/no-array-reduce */

import React from "react";

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
import { calculateTotalPrice, getModuleFeatureConfig } from "@/lib/features";
import { cn } from "@/lib/utils";
import ControlledFormChainSelect from "@/components/common/chain-select";
import ButtonSpinner from "@/components/common/button-spinner";

export default function ReviewMain({
  form,
  isCreating,
  testnetMode,
  triggerCreateProject,
}: TReviewProps) {
  const contracts = form.watch("contracts");
  const defaultAccordionValue = Object.keys(contracts)[0];

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
            "bg-template-card-gradient rounded-[14px] border border-purple-500 px-8 lg:relative lg:z-40 lg:min-h-[610px]",
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
            onClick={triggerCreateProject}
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

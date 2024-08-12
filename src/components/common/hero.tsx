import React from "react";

import type { TChain } from "@/lib/types/chain";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import { Col, Row } from "@/components/common/grid";
import { Button } from "@/components/ui/button";

import BannerContainer from "../common/banner-container";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { useStepper } from "@/app/_components/stepper";

type CustomizeHeroProps = {
  projectName: string;
  projectChain: TChain | undefined;
};

export default function CustomizeHero({
  projectName,
  projectChain,
}: CustomizeHeroProps) {
  const { prevStep, currentStep } = useStepper();

  return (
    <BannerContainer>
      <Row className="relative">
        <Col lg={6} md={2} sm={4} className="sm:order-2">
          <Image
            src="/palette.svg"
            alt="palette icon"
            width={200}
            height={200}
            className="absolute -left-2 -top-6 h-[210px] lg:left-0 lg:h-[160px] md:h-[182px] sm:hidden"
          />
          <div className="z-35 relative">
            <h2 className="font-regular text-accent-dark text-xl md:text-[32px]">
              {currentStep?.name}
            </h2>
            <div className="h-6" />
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarFallback className="!bg-primary text-2xl font-bold">
                  <p>{projectName.length > 1 && projectName.slice(0, 2)}</p>
                </AvatarFallback>
              </Avatar>
              <h1 className="text-2xl text-white lg:text-5xl">{projectName}</h1>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          md={4}
          sm={4}
          className="relative z-30 lg:flex lg:flex-col lg:items-end"
        >
          <div className="order-first flex w-full justify-end sm:order-none sm:justify-start">
            <Button
              variant="ghost"
              className="items-center gap-3 rounded text-lg text-white lg:flex md:flex"
              type="button"
              onClick={() => prevStep()}
            >
              <ArrowLeft />
              Back
            </Button>
          </div>
          <div className="h-8 sm:h-4" />

          <div className="flex w-full items-center justify-end sm:flex-col sm:items-start">
            <p className="pr-4 text-xs font-light text-white">
              Your app will be deployed on:
            </p>
            <div className="h-2 sm:hidden" />
            <div className="inline-flex items-center gap-2 rounded-[4px] bg-muted px-2 py-1 hover:bg-muted-foreground md:px-4 md:py-3">
              {projectChain?.logoURL && (
                <Image
                  src={projectChain.logoURL}
                  alt={projectChain.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              )}
              <p className="font-medium text-white lg:text-2xl md:text-[12px]">
                {projectChain?.name}
              </p>
            </div>
            <div className="h-3" />
          </div>
        </Col>
      </Row>
    </BannerContainer>
  );
}

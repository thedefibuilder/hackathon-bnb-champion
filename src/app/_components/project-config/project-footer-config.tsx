import React from "react";

import { ArrowRight } from "lucide-react";

import { Col, Row } from "@/components/common/grid";
import { Button } from "@/components/ui/button";

import { type CreateProjectProps } from "./project-config";
import { useStepper } from "../stepper";

export default function ProjectFooterConfig({
  form,
  scrollToTop,
}: CreateProjectProps) {
  const { nextStep } = useStepper();
  async function triggerContinue() {
    await form.trigger();
    if (Object.keys(form.formState.errors).length === 0) {
      nextStep();
      scrollToTop();
    }
  }
  return (
    <Row>
      <Col lg={6}>
        <h2 className="text-2xl font-bold md:text-[32px]">
          Just the first step and you’re halfway through.
        </h2>
        <div className="h-2" />
        <p className="text-grey md:text-2xl">
          Now lets configure that dope dApp
        </p>
      </Col>
      <Col lg={6}>
        <div className="h-8 lg:hidden md:hidden" />
        <div className="flex w-full justify-end">
          <Button
            className="flex w-full items-center gap-2 rounded-[14px] bg-primary lg:w-1/2 md:w-1/2 md:w-3/12"
            type="button"
            onClick={triggerContinue}
          >
            Continue <ArrowRight />
          </Button>
        </div>
      </Col>
    </Row>
  );
}

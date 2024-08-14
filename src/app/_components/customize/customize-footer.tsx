"use client";

import React from "react";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { type CreateProjectProps } from "../project-config/project-config";
import { useStepper } from "../stepper";
import { Col, Row } from "../../../components/common/grid";

export default function CustomizeFooter({
  form,
  scrollToTop,
}: CreateProjectProps) {
  console.log(form.formState.errors);
  const { nextStep } = useStepper();

  async function triggerContinue() {
    await form.trigger();
    if (Object.keys(form.formState.errors).length === 0) {
      nextStep();

      scrollToTop();
    }
  }

  return (
    <Row className="items-center">
      <Col lg={8}>
        <h3 className="text-3xl font-bold lg:text-[32px]">
          That dApp is looking pretty neat.
        </h3>
        <div className="h-2" />
        <p className="text-grey lg:text-2xl">
          Continue to deploy your app and show it to the world.
        </p>
      </Col>
      <Col lg={4}>
        <div className="h-8 md:h-4" />
        <div className="flex w-full justify-end">
          <Button
            type="button"
            className="flex w-full items-center gap-2 rounded-[14px]"
            onClick={triggerContinue}
          >
            Review <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </Col>
    </Row>
  );
}

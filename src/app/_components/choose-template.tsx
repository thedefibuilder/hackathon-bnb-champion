import React from "react";

import type { ETemplateName } from "@/lib/templates";

import dynamic from "next/dynamic";

import { templates } from "@/lib/templates";
import { useStepper } from "./stepper";
import { Col, Row } from "../../components/common/grid";
import { Skeleton } from "@/components/ui/skeleton";

type TChooseTemplateProps = {
  onTemplateClick: (template: ETemplateName) => void;
};

const TemplateHero = dynamic(() => import("./template/template-hero"), {
  loading: () => (
    <Skeleton className="h-[128px] w-full rounded-3xl lg:h-[136px] md:h-[232px]" />
  ),
  ssr: false,
});

const TemplateCard = dynamic(() => import("./template/template-card"), {
  loading: () => (
    <Skeleton className="h-[507px] w-full rounded-3xl lg:h-[483px] md:h-[487px]" />
  ),
  ssr: false,
});

export default function ChooseTemplate({
  onTemplateClick,
}: TChooseTemplateProps) {
  const { nextStep } = useStepper();
  const handleTemplateClick = (template: ETemplateName) => {
    onTemplateClick(template);
    nextStep();
  };

  return (
    <>
      <TemplateHero />
      <div className="h-12" />
      <Row>
        {templates.map((template, index) => (
          <Col
            lg={3}
            md={3}
            key={`${template.name}-${index}`}
            className="mb-10 sm:mb-6"
          >
            <TemplateCard
              image={template.image}
              title={template.name}
              description={template.description}
              template={template}
              isPro={template.isPro ?? false}
              onClick={() => handleTemplateClick(template.name)}
            />
          </Col>
        ))}
      </Row>
      <div className="h-20" />
    </>
  );
}

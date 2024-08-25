"use client";
import React from "react";

import dynamic from "next/dynamic";

import { templates } from "src/lib/templates";
import { Col, Row } from "../../components/common/grid";
import { Skeleton } from "src/components/ui/skeleton";
import Templates from "./template/templates";

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

export default function ChooseTemplate() {
  return (
    <>
      <div className="h-12" />
      <TemplateHero />
      <div className="h-12" />
      <Templates />
      <div className="h-20" />
    </>
  );
}

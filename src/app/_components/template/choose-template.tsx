"use client";
import React from "react";

import dynamic from "next/dynamic";
import { Skeleton } from "src/components/ui/skeleton";

import Templates from "./templates";

const TemplateHero = dynamic(() => import("./template-hero"), {
  loading: () => (
    <Skeleton className="h-[128px] w-full rounded-3xl lg:h-[136px] md:h-[232px]" />
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

import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import Templates from "./_components/template/templates";

const TemplateHero = dynamic(
  () => import("./_components/template/template-hero"),
  {
    loading: () => (
      <Skeleton className="h-[128px] w-full rounded-3xl lg:h-[136px] md:h-[232px]" />
    ),
    ssr: true,
  },
);

export default function CreateProjectPage() {
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

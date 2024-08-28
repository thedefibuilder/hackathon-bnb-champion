"use client";
import React from "react";
import { Container } from "@/components/common/grid";
import dynamic from "next/dynamic";
import { FormProvider, useForm } from "react-hook-form";
import { TCategoryFilter } from "@/lib/schemas/category-filter";

const UserTemplateHero = dynamic(
  () => import("../_components/user-template/user-template-hero"),
  {
    loading: () => <div className="h-[128px] w-full" />,
    ssr: false,
  },
);

const UserTemplates = dynamic(
  () => import("../_components/user-template/user-templates"),
  {
    loading: () => <div className="h-96 w-full" />,
    ssr: false,
  },
);

export default function UserTemplatePage() {
  const form = useForm<TCategoryFilter>();

  return (
    <FormProvider {...form}>
      <div className="h-12" />
      <UserTemplateHero />
      <div className="h-12" />
      <UserTemplates />
    </FormProvider>
  );
}

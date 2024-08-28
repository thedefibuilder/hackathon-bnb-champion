"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { TCategoryFilter } from "@/lib/schemas/category-filter";

const TemplateHero = dynamic(
  () => import("./_components/template/template-hero"),
  {
    loading: () => (
      <Skeleton className="h-[128px] w-full rounded-3xl lg:h-[136px] md:h-[232px]" />
    ),
    ssr: false,
  },
);

const Templates = dynamic(() => import("./_components/template/templates"), {
  loading: () => (
    <Skeleton className="h-96 w-full rounded-3xl lg:h-[136px] md:h-[232px]" />
  ),
  ssr: false,
});

export default function HomePage() {
  const form = useForm<TCategoryFilter>();

  return (
    <Form {...form}>
      <form>
        <div className="h-12 md:h-8" />
        <TemplateHero />
        <div className="h-12 md:h-8" />

        <Templates />
        <div className="h-12 md:h-8" />
      </form>
    </Form>
  );
}

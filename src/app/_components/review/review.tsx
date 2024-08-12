import React from "react";

import type { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
import { type z } from "zod";

import { Container } from "@/components/common/grid";

import { Skeleton } from "@/components/ui/skeleton";
import { getChainConfig } from "@/lib/chains";
import { type createProjectSchema } from "@/lib/schemas/create-project";
import CustomizeHero from "@/components/common/hero";

export type TReviewProps = {
  form: ReturnType<typeof useForm<z.infer<typeof createProjectSchema>>>;
  isCreating: boolean;
  triggerCreateProject: () => void;
  testnetMode: boolean;
};

const ReviewMain = dynamic(() => import("./review-main"), {
  loading: () => <Skeleton className="h-[800px] w-full" />,
  ssr: false,
});

export default function ProjectReview({
  form,
  isCreating,
  testnetMode,
  triggerCreateProject,
}: TReviewProps) {
  const projectName = form.watch("name");
  const projectChainId = form.watch("chainId");
  const projectChain = getChainConfig(projectChainId);
  return (
    <Container variant="fluid" className="!px-0">
      <CustomizeHero projectName={projectName} projectChain={projectChain} />
      <div className="h-10 lg:h-20" />
      <ReviewMain
        form={form}
        isCreating={isCreating}
        triggerCreateProject={triggerCreateProject}
        testnetMode={testnetMode}
      />
      <div className="h-80" />
    </Container>
  );
}

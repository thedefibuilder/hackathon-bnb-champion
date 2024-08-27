import React from "react";

import { Container } from "@/components/common/grid";
import dynamic from "next/dynamic";

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
  return (
    <>
      <div className="h-12" />
      <UserTemplateHero />
      <div className="h-12" />

      <Container variant="fluid">
        <UserTemplates />
      </Container>
    </>
  );
}

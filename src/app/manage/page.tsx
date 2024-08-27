import React from "react";

import UserTemplateHero from "@/app/_components/user-template/user-template-hero";
import UserTemplates from "@/app/_components/user-template/user-templates";
import { Container } from "@/components/common/grid";

export default function UserTemplatePage() {
  return (
    <>
      <div className="h-12" />
      <UserTemplateHero />
      <div className="h-12" />

      <Container>
        <UserTemplates />
      </Container>
    </>
  );
}

import { Container } from "@/components/common/grid";
import dynamic from "next/dynamic";

const UserTemplateHero = dynamic(
  () => import("@/app/_components/user-template/user-template-hero"),
  {
    ssr: false,
  },
);

const UserTemplates = dynamic(
  () => import("@/app/_components/user-template/user-templates"),
  {
    ssr: false,
  },
);
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

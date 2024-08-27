import { Container } from "@/components/common/grid";
import { fetchBnbRate } from "@/lib/server-actions";
import dynamic from "next/dynamic";

const UploadeTemplateForm = dynamic(
  () => import("@/app/_components/uploade-template-from"),
  {
    ssr: false,
  },
);

export default async function UploadeTemplate() {
  const bnbRate = await fetchBnbRate();

  return (
    <Container>
      <div className="h-12" />
      <UploadeTemplateForm bnbRate={bnbRate} />
    </Container>
  );
}

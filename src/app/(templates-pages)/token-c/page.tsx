import dynamic from "next/dynamic";

const TokenC = dynamic(() => import("@/templates/token/token-c"), {
  ssr: false,
});
export default function TokenCPage() {
  return <TokenC />;
}

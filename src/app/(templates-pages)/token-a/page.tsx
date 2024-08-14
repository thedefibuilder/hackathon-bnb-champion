import dynamic from "next/dynamic";

const TokenA = dynamic(() => import("@/templates/token/token-a"), {
  ssr: false,
});
export default function TokenAPage() {
  return <TokenA />;
}

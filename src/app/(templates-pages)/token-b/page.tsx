import dynamic from "next/dynamic";

const TokenB = dynamic(() => import("@/templates/token/token-b"), {
  ssr: false,
});
export default function TokenBPage() {
  return <TokenB />;
}

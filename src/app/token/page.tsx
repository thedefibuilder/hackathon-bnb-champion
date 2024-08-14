import TokenTango from "@/templates/token/token-tango";
import TokneTornado from "@/templates/token/token-tornado";
import dynamic from "next/dynamic";

const TokenFiasco = dynamic(() => import("@/templates/token/token-fiasco"), {
  ssr: false,
});
export default function Token() {
  // return <TokenTango /> ;
  return <TokenFiasco />;
  // return <TokneTornado />;
}

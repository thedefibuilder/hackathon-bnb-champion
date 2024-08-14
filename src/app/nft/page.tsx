import NftA from "@/templates/nft/nft-a";
import NftB from "@/templates/nft/nft-b";
import dynamic from "next/dynamic";

const NftC = dynamic(() => import("@/templates/nft/nft-c"), {
  ssr: false,
});
export default function Nft() {
  // return <NftA />;
  // return <NftB />;
  return <NftC />;
}

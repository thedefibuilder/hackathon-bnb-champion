import dynamic from "next/dynamic";

const NftC = dynamic(() => import("@/templates/nft/nft-c"), {
  ssr: false,
});
export default function NftCPage() {
  return <NftC />;
}

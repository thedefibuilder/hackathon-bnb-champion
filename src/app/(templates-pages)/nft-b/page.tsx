import dynamic from "next/dynamic";

const NftB = dynamic(() => import("@/templates/nft/nft-b"), {
  ssr: false,
});
export default function NftBPage() {
  return <NftB />;
}

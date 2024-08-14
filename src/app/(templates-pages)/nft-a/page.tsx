import dynamic from "next/dynamic";

const NftA = dynamic(() => import("@/templates/nft/nft-a"), {
  ssr: false,
});
export default function NftAPage() {
  return <NftA />;
}

import dynamic from "next/dynamic";

const DaoToken = dynamic(() => import("@/templates/dao-token/dao-token"), {
  ssr: false,
});
export default function DaoTokenPage() {
  return <DaoToken />;
}

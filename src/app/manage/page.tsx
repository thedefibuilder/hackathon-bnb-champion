import React from "react";

import { fetchGoogleFonts } from "@/lib/server-actions";
import dynamic from "next/dynamic";

const ManageClient = dynamic(() => import("@/components/manage/client"), {
  ssr: false,
});

export default async function ManagePage() {
  const fonts = await fetchGoogleFonts();

  return <ManageClient fonts={fonts} />;
}

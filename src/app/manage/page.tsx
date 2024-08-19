import React from "react";

import { fetchGoogleFonts } from "@/lib/server-actions";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/sidebar"), {
  ssr: false,
});
export default async function ManagePage() {
  const fonts = await fetchGoogleFonts();

  return <Sidebar fonts={fonts} />;
}

import React from "react";

import dynamic from "next/dynamic";
import { fetchGoogleFonts } from "@/lib/server-actions";

const Create = dynamic(() => import("./_components/create"), {
  ssr: false,
});

export default async function CreateProjectPage() {
  const fonts = await fetchGoogleFonts();
  return <Create fonts={fonts} />;
}

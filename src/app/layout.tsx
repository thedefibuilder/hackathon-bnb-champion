import React from "react";

import type { Metadata, Viewport } from "next";

import RootProvider from "@/providers/root";

import "../styles/globals.css";
import "../styles/globals.scss";

import { Toaster } from "@/components/ui/toaster";
import config from "_config";

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: "favicon.svg",
  // manifest: "app.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <div className="px-8 md:px-14 lg:px-32">
            <div className="sm:h-[6rem] md:h-[5rem] lg:h-20" />
            {children}
          </div>
          <div className="h-screen lg:hidden" />

          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}

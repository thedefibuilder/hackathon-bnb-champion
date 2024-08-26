import React from "react";

import type { Metadata, Viewport } from "next";

import RootProvider from "@/providers/root";

import "../styles/globals.css";
import "../styles/globals.scss";

import { Toaster } from "@/components/ui/toaster";
import config from "_config";
import Header from "@/components/common/header";
import "@rainbow-me/rainbowkit/styles.css";

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: "favicon.svg",
  manifest: "app.webmanifest",
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
      <body className="bg-[#000C03]">
        <RootProvider>
          <Header />

          <div className="px-8 lg:px-32 md:px-14">
            <div className="lg:h-20 md:h-[5rem] sm:h-[6rem]" />
            {children}
          </div>
          <div className="h-screen lg:hidden" />

          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}

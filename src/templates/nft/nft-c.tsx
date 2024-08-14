"use client";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import {
  IconCalendarMonth,
  IconDiamond,
  IconJetpack,
  IconLayersIntersect,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";
import WebFont from "webfontloader";

export default function NftC() {
  const dappSettings = JSON.parse(localStorage.getItem("dappSettings") || "{}");
  const projectName = dappSettings.projectName;
  const fonts = dappSettings.fontOption;
  const colors = useDappColors(dappSettings.colorOption);
  useEffect(() => {
    if (fonts) {
      WebFont.load({
        google: {
          families: [fonts],
        },
      });
    }
  }, [fonts]);
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <IconDiamond stroke={2} />

          <span className="sr-only" style={{ fontFamily: fonts }}>
            NFT Project
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            NFTs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Roadmap
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 lg:py-32 md:py-24">
          <div className="container grid items-center gap-6 px-4 lg:grid-cols-2 lg:gap-10 md:px-6">
            <div className="space-y-4">
              <h1
                className="text-4xl font-bold tracking-tighter md:text-6xl sm:text-5xl"
                style={{ fontFamily: fonts }}
              >
                Discover Unique NFTs
              </h1>
              <p
                className="max-w-[600px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                style={{ fontFamily: fonts }}
              >
                Explore our collection of one-of-a-kind digital art pieces and
                invest in the future of digital ownership.
              </p>
              <div className="min-[400px]:flex-row flex flex-col gap-2">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  style={{ fontFamily: fonts, background: colors.primary }}
                >
                  View NFTs
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  style={{ fontFamily: fonts }}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/nft.png"
              width="550"
              height="550"
              alt="Hero NFT"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>

        <section
          className="w-full bg-muted py-12 lg:py-32 md:py-24"
          style={{ fontFamily: fonts, background: colors.muted }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts, color: colors.background }}
                >
                  Explore Our NFT Designs
                </h2>
                <p
                  className="max-w-[900px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts, color: colors.background }}
                >
                  Our collection features a diverse range of unique digital art
                  pieces, each with its own story and value.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div
                className="group relative overflow-hidden rounded-xl border"
                style={{ fontFamily: fonts, borderColor: colors.background }}
              >
                <img
                  src="/nft.png"
                  width="350"
                  height="350"
                  alt="NFT 1"
                  className="aspect-square object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div
                className="group relative overflow-hidden rounded-xl border"
                style={{ fontFamily: fonts, borderColor: colors.background }}
              >
                <img
                  src="/nft2.png"
                  width="350"
                  height="350"
                  alt="NFT 2"
                  className="aspect-square object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div
                className="group relative overflow-hidden rounded-xl border"
                style={{ fontFamily: fonts, borderColor: colors.background }}
              >
                <img
                  src="/nft3.png"
                  width="350"
                  height="350"
                  alt="NFT 3"
                  className="aspect-square object-cover transition-all group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 lg:py-32 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  Our Roadmap
                </h2>
                <p
                  className="max-w-[900px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Learn about our plans for the future and how we're committed
                  to building a thriving NFT ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-md p-3"
                    style={{ background: colors.primary }}
                  >
                    <IconCalendarMonth stroke={2} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Q3 2023
                  </h3>
                </div>
                <p style={{ fontFamily: fonts }}>
                  Launch our initial NFT collection and establish our presence
                  in the market.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-md p-3"
                    style={{ background: colors.primary }}
                  >
                    <IconLayersIntersect stroke={2} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Q4 2023
                  </h3>
                </div>
                <p style={{ fontFamily: fonts }}>
                  Expand our NFT ecosystem with new collections and utilities,
                  including staking and governance features.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-md p-3"
                    style={{ background: colors.primary }}
                  >
                    <IconJetpack stroke={2} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    2024 and Beyond
                  </h3>
                </div>
                <p style={{ fontFamily: fonts }}>
                  Continuously innovate and introduce new features to provide an
                  unparalleled NFT experience for our community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 md:px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 NFT Project. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

"use client";

import { IdProps } from "@/lib/customizableTemplateItems";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import Link from "next/link";
import { useEffect } from "react";
import WebFont from "webfontloader";

export default function TokenA({ id }: IdProps) {
  const dappSettings = JSON.parse(localStorage.getItem("dappSettings") || "{}");
  const projectName = dappSettings.projectName || "Project Name";
  const fonts = dappSettings.fontOption || "Inter";
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
          <img
            src="/project-logo.png"
            width={32}
            height={32}
            alt="Token Logo"
            className="mr-2"
            style={{ aspectRatio: "32/32", objectFit: "cover" }}
          />

          <span className="text-lg font-bold" style={{ fontFamily: fonts }}>
            {projectName}
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Utility
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Buy
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 lg:py-32 md:py-24">
          <div className="container grid gap-6 px-4 lg:grid-cols-2 lg:gap-12 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  style={{ fontFamily: fonts }}
                >
                  {projectName}
                </h1>
                <p
                  className="max-w-[600px] md:text-xl"
                  style={{ fontFamily: fonts }}
                >
                  A decentralized cryptocurrency token with a focus on privacy,
                  security, and scalability.
                </p>
              </div>
              <div className="min-[400px]:flex-row flex flex-col gap-2">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  style={{ fontFamily: fonts, background: colors?.primary }}
                >
                  Buy Token
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  style={{ fontFamily: fonts, background: colors?.background }}
                >
                  Whitepaper
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/hero-main.png"
                width={200}
                height={200}
                alt="Token Logo"
                className="rounded-full"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-muted py-12 lg:py-32 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Token Features
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  Why Choose Token Name?
                </h2>
                <p
                  className="max-w-[600px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Token Name offers a range of features that make it a
                  compelling choice for cryptocurrency users.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        Privacy-Focused
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        Token Name uses advanced cryptography to ensure maximum
                        privacy for its users.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        Scalable Infrastructure
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        The Token Name network is designed to scale efficiently,
                        ensuring fast and reliable transactions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        Secure by Design
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        Token Name prioritizes security, with robust safeguards
                        to protect your assets.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/farm-platform.svg"
                width={550}
                height={310}
                alt="Token Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="utility" className="w-full py-12 lg:py-32 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Token Utility
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  How Can You Use Token Name?
                </h2>

                <p
                  className="max-w-[600px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Token Name can be used for a variety of purposes, from
                  payments to decentralized applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/farm-platform.svg"
                width={550}
                height={310}
                alt="Token Utility"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        Decentralized Payments
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        Use Token Name for fast, secure, and low-cost
                        transactions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        DeFi Applications
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        Participate in decentralized finance protocols and earn
                        rewards.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        Governance
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        Hold Token Name to participate in the project's
                        decision-making process.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="buy" className="w-full bg-muted py-12 lg:py-32 md:py-24">
          <div className="container grid items-center gap-6 px-4 lg:grid-cols-2 lg:gap-10 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get Token Name Now
              </h2>
              <p className="max-w-[600px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                You can purchase Token Name through our supported exchanges or
                directly from our website.
              </p>
            </div>
            <div className="min-[400px]:flex-row flex flex-col gap-2 lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                style={{ fontFamily: fonts, background: colors?.primary }}
              >
                Buy Token
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                style={{ fontFamily: fonts, background: colors?.background }}
              >
                Invest
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 md:px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Token Name. All rights reserved.
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
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

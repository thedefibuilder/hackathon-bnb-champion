"use client";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { IconMountain } from "@tabler/icons-react";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { IdProps } from "@/lib/customizableTemplateItems";

export default function DaoToken({ id }: IdProps) {
  const dappSettings = JSON.parse(localStorage.getItem("dappSettings") || "{}");
  const projectName = dappSettings.projectName || "Project Name";
  const fonts = dappSettings.fontOption || "Inter";
  const colors = useDappColors(dappSettings.colorOption || "Twilight");

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
          <IconMountain stroke={2} />
          <span className="sr-only" style={{ fontFamily: fonts }}>
            Acme DAO
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Tokens
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Governance
          </Link>
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
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 lg:py-32 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    style={{ fontFamily: fonts }}
                  >
                    Explore the Tokens of Acme DAO
                  </h1>
                  <p
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                    style={{ fontFamily: fonts }}
                  >
                    Acme DAO is a decentralized autonomous organization focused
                    on building the future of the web. Discover our diverse
                    token ecosystem and get involved in our governance.
                  </p>
                </div>
                <div className="min-[400px]:flex-row flex flex-col gap-2">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors.primary }}
                  >
                    Explore Tokens
                  </Link>
                  <div className="h-2" />
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors.background }}
                  >
                    Learn About Governance
                  </Link>
                </div>
              </div>
              <img
                src="/image.avif"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last lg:aspect-square sm:w-full"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 lg:py-32 md:py-24"
          style={{ fontFamily: fonts, background: colors.muted }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  Discover Our Token Ecosystem
                </h2>
                <p
                  className="max-w-[900px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Acme DAO offers a diverse range of tokens, each with its own
                  unique use case and value proposition. Explore our token
                  offerings and get involved in our decentralized governance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle style={{ fontFamily: fonts }}>
                    ACME Token
                  </CardTitle>
                  <CardDescription style={{ fontFamily: fonts }}>
                    The native token of the Acme DAO ecosystem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span style={{ fontFamily: fonts }}>Symbol:</span>
                      <span style={{ fontFamily: fonts }}>ACME</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontFamily: fonts }}>Price:</span>
                      <span style={{ fontFamily: fonts }}>$0.50</span>
                    </div>
                  </div>
                  <div className="h-2" />
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors.primary }}
                  >
                    Explore ACME
                  </Link>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle style={{ fontFamily: fonts }}>
                    DAPP Token
                  </CardTitle>
                  <CardDescription style={{ fontFamily: fonts }}>
                    The token used for decentralized applications built on Acme
                    DAO.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span style={{ fontFamily: fonts }}>Symbol:</span>
                      <span style={{ fontFamily: fonts }}>DAPP</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontFamily: fonts }}>Price:</span>
                      <span style={{ fontFamily: fonts }}>$0.25</span>
                    </div>
                  </div>
                  <div className="h-2" />

                  <Link
                    href="#"
                    className="font-mediumshadow inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors.primary }}
                  >
                    Explore DAPP
                  </Link>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle
                    style={{
                      fontFamily: fonts,
                    }}
                  >
                    GOV Token
                  </CardTitle>
                  <CardDescription
                    style={{
                      fontFamily: fonts,
                    }}
                  >
                    The governance token used for voting and decision-making in
                    the Acme DAO.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        Symbol:
                      </span>
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        GOV
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        Price:
                      </span>
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        $1.00
                      </span>
                    </div>
                  </div>
                  <div className="h-2" />
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors.primary }}
                  >
                    Explore GOV
                  </Link>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle
                    style={{
                      fontFamily: fonts,
                    }}
                  >
                    STAKE Token
                  </CardTitle>
                  <CardDescription
                    style={{
                      fontFamily: fonts,
                    }}
                  >
                    The token used for staking and earning rewards in the Acme
                    DAO ecosystem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        Symbol:
                      </span>
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        STAKE
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        Price:
                      </span>
                      <span
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        $0.75
                      </span>
                    </div>
                  </div>
                  <div className="h-2" />
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors.primary }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 md:px-6 sm:flex-row">
        <p style={{ fontFamily: fonts, color: colors.primary }}>
          &copy; 2024 Acme DAO. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            style={{ fontFamily: fonts }}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

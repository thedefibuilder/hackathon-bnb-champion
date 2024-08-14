"use client";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconAward,
  IconDiamond,
  IconMoon,
  IconUser,
  IconWallet,
} from "@tabler/icons-react";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NftA() {
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
      <main className="flex-1">
        <section
          className="w-full bg-background py-12 lg:py-32 md:py-24"
          style={{ fontFamily: fonts }}
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-4 lg:flex-row md:flex-row md:gap-16">
              <div className="w-1/2">
                <h1
                  className="text-4xl font-bold md:text-5xl sm:text-4xl"
                  style={{ fontFamily: fonts }}
                >
                  Discover, Collect, and Sell Extraordinary NFTs
                </h1>
                <p
                  className="mx-auto max-w-[700px] md:text-xl"
                  style={{ fontFamily: fonts }}
                >
                  Explore the world's leading NFT marketplace. Buy, sell, and
                  discover rare digital assets.
                </p>
                <div className="mt-6 flex flex-col gap-4 lg:flex-row md:flex-row md:space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors?.primary }}
                  >
                    Explore NFTs
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts }}
                  >
                    Create NFT
                  </Link>
                </div>
              </div>
              <div className="w-1/2 flex-col">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="flex flex-col items-center justify-center rounded-lg p-4"
                    style={{
                      fontFamily: fonts,
                      background: colors?.muted,
                    }}
                  >
                    <IconDiamond stroke={2} />
                    <h3
                      className="mt-2 text-lg font-bold"
                      style={{ fontFamily: fonts }}
                    >
                      10K+
                    </h3>

                    <p className="text-sm" style={{ fontFamily: fonts }}>
                      NFTs Sold
                    </p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center rounded-lg p-4"
                    style={{
                      fontFamily: fonts,
                      background: colors?.muted,
                    }}
                  >
                    <IconUser stroke={2} />
                    <h3
                      className="mt-2 text-lg font-bold"
                      style={{ fontFamily: fonts }}
                    >
                      100K+
                    </h3>
                    <p className="text-sm" style={{ fontFamily: fonts }}>
                      Active Users
                    </p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center rounded-lg p-4"
                    style={{
                      fontFamily: fonts,
                      background: colors?.muted,
                    }}
                  >
                    <IconWallet stroke={2} />
                    <h3
                      className="mt-2 text-lg font-bold"
                      style={{ fontFamily: fonts }}
                    >
                      $50M+
                    </h3>
                    <p className="text-sm" style={{ fontFamily: fonts }}>
                      Total Volume
                    </p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center rounded-lg p-4"
                    style={{
                      fontFamily: fonts,
                      background: colors?.muted,
                    }}
                  >
                    <IconAward stroke={2} />
                    <h3
                      className="mt-2 text-lg font-bold"
                      style={{ fontFamily: fonts }}
                    >
                      Top Rated
                    </h3>
                    <p className="text-sm" style={{ fontFamily: fonts }}>
                      Marketplace
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/nft.png"
              width="500"
              height="300"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>

        <section className="w-full py-12 lg:py-10 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                  style={{ fontFamily: fonts, background: colors?.muted }}
                >
                  Featured NFTs
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  Explore Our Featured NFTs
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Discover a curated selection of the most valuable and
                  sought-after NFTs on our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden rounded-lg bg-background shadow-lg">
                <CardHeader>
                  <img
                    src="/nft.png"
                    width="550"
                    height="310"
                    alt="NFT Image"
                    className="aspect-video w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: fonts }}
                      >
                        Cyber Punk #4321
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: fonts }}
                      >
                        by @artist
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMoon
                        stroke={2}
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      />
                      <span
                        className="text-lg font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        1.2 ETH
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between bg-muted p-4">
                  <Button
                    size="sm"
                    className="w-full"
                    style={{ fontFamily: fonts, background: colors?.primary }}
                  >
                    Buy
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden rounded-lg bg-background shadow-lg">
                <CardHeader>
                  <img
                    src="/nft2.png"
                    width="550"
                    height="310"
                    alt="NFT Image"
                    className="aspect-video w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        Cyber Punk #4322
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        by @artist
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMoon
                        stroke={2}
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      />
                      <span
                        className="text-lg font-bold"
                        style={{ fontFamily: fonts, color: colors?.primary }}
                      >
                        1.5 ETH
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between bg-muted p-4">
                  <Button
                    size="sm"
                    className="w-full"
                    style={{ fontFamily: fonts, background: colors?.primary }}
                  >
                    Buy
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden rounded-lg bg-background shadow-lg">
                <CardHeader>
                  <img
                    src="/nft3.png"
                    width="550"
                    height="310"
                    alt="NFT Image"
                    className="aspect-video w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        Cyber Punk #4323
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        style={{
                          fontFamily: fonts,
                        }}
                      >
                        by @artist
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMoon
                        stroke={2}
                        style={{
                          fontFamily: fonts,
                          color: colors?.primary,
                        }}
                      />
                      <span
                        className="text-lg font-bold"
                        style={{
                          fontFamily: fonts,
                          color: colors?.primary,
                        }}
                      >
                        2.0 ETH
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between bg-muted p-4">
                  <Button
                    size="sm"
                    className="w-full"
                    style={{ fontFamily: fonts, background: colors?.primary }}
                  >
                    Buy
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="team" className="w-full bg-muted py-12 lg:py-32 md:py-24">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Meet the Team
                </h2>
                <p
                  className="max-w-[900px lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  The talented individuals behind the success of {projectName}.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 lg:max-w-5xl lg:grid-cols-3 md:gap-12 sm:max-w-4xl sm:grid-cols-2">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback
                      style={{
                        fontFamily: fonts,
                        background: colors?.secondary,
                      }}
                    >
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: fonts, color: colors?.foreground }}
                    >
                      John Doe
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: fonts, color: colors?.muted }}
                    >
                      Co-Founder &amp; CEO
                    </p>
                  </div>
                </div>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  John is a seasoned entrepreneur with a passion for blockchain
                  technology. He leads the strategic vision and oversees the
                  overall development of Token Name.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback
                      style={{
                        fontFamily: fonts,
                        background: colors?.secondary,
                      }}
                    >
                      JA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: fonts, color: colors?.foreground }}
                    >
                      Jane Appleseed
                    </h3>

                    <p
                      className="text-sm"
                      style={{ fontFamily: fonts, color: colors?.muted }}
                    >
                      Co-Founder &amp; CTO
                    </p>
                  </div>
                </div>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Jane is a renowned blockchain engineer with extensive
                  experience in developing decentralized applications. She leads
                  the technical team and oversees the implementation of Token
                  Name's core features.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback
                      style={{
                        fontFamily: fonts,
                        background: colors?.secondary,
                      }}
                    >
                      JB
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: fonts, color: colors?.foreground }}
                    >
                      John Bravo
                    </h3>

                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: fonts, color: colors?.muted }}
                    >
                      Advisor
                    </p>
                  </div>
                </div>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  John is a renowned blockchain expert and investor. He provides
                  strategic guidance and advisory support to the Token Name
                  team, leveraging his extensive industry experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

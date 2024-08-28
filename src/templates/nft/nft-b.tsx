"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { IconHeart, IconUser } from "@tabler/icons-react";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { IdProps } from "@/lib/customizableTemplateItems";

export default function NftB({ id }: IdProps) {
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
    <div className="flex min-h-screen flex-col">
      <header
        className="from-[#6366F1] to-[#8B5CF6] px-4 py-8 md:px-6"
        style={{ fontFamily: fonts }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold text-white md:text-5xl"
                style={{ fontFamily: fonts }}
              >
                Discover, Collect, and Sell Extraordinary NFTs
              </h1>
              <p
                className="text-lg text-gray-200"
                style={{ fontFamily: fonts }}
              >
                Our NFT marketplace offers a curated selection of the most
                unique and valuable digital assets. Join our community and start
                your NFT journey today.
              </p>
              <div className="flex gap-4">
                <Button
                  style={{ fontFamily: fonts, background: colors.primary }}
                >
                  Explore NFTs
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div
                className="col-span-2 row-span-2 overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <img
                  src="/nft4.png"
                  width={600}
                  height={400}
                  alt="Featured NFT"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <img
                  src="/nft2.png"
                  width={300}
                  height={200}
                  alt="Featured NFT"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
              </div>
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <img
                  src="/nft3.png"
                  width={300}
                  height={200}
                  alt="Featured NFT"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-8 flex flex-col items-center space-y-4">
              <div
                className="inline-block rounded-full bg-[#F3F4F6] px-3 py-1 text-sm font-medium"
                style={{ fontFamily: fonts, background: colors.muted }}
              >
                Featured NFTs
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ fontFamily: fonts }}
              >
                Explore Our Featured NFTs
              </h2>
              <p
                className="max-w-xl text-center text-lg"
                style={{ fontFamily: fonts }}
              >
                Browse through our curated selection of the most valuable and
                unique NFTs on the market.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <div className="relative">
                  <img
                    src="/nft5.png"
                    width={400}
                    height={300}
                    alt="NFT"
                    className="h-56 w-full object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />

                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Cosmic Odyssey
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Creator" />
                      <AvatarFallback style={{ fontFamily: fonts }}>
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span style={{ fontFamily: fonts }}>John Doe</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold text-[#6366F1]"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      2.5 ETH
                    </span>
                    <Button
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <div className="relative">
                  <img
                    src="/nft2.png"
                    width={400}
                    height={300}
                    alt="NFT"
                    className="h-56 w-full object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />

                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ fontFamily: fonts, background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Ethereal Bloom
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Creator" />
                      <AvatarFallback style={{ fontFamily: fonts }}>
                        SA
                      </AvatarFallback>
                    </Avatar>
                    <span style={{ fontFamily: fonts }}>Sarah Anderson</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      1.8 ETH
                    </span>
                    <Button
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <div className="relative">
                  <img
                    src="/nft3.png"
                    width={400}
                    height={300}
                    alt="NFT"
                    className="h-56 w-full object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />

                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ fontFamily: fonts, background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Ethereal Bloom
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Creator" />
                      <AvatarFallback style={{ fontFamily: fonts }}>
                        SA
                      </AvatarFallback>
                    </Avatar>
                    <span style={{ fontFamily: fonts }}>Sarah Anderson</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      1.8 ETH
                    </span>
                    <Button
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: colors.primary }}
              >
                <div className="relative">
                  <img
                    src="/nft4.png"
                    width={400}
                    height={300}
                    alt="NFT"
                    className="h-56 w-full object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />

                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Cosmic Odyssey
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Creator" />
                      <AvatarFallback style={{ fontFamily: fonts }}>
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span style={{ fontFamily: fonts }}>John Doe</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold text-[#6366F1]"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      2.5 ETH
                    </span>
                    <Button
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-8 flex flex-col items-center space-y-4">
              <div
                className="inline-block rounded-full bg-[#6366F1] px-3 py-1 text-sm font-medium text-white"
                style={{ fontFamily: fonts, background: colors.muted }}
              >
                Top NFT Creators
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ fontFamily: fonts }}
              >
                Meet Our Top NFT Creators
              </h2>
              <p
                className="max-w-xl text-center text-lg"
                style={{ fontFamily: fonts }}
              >
                Discover the talented artists behind the most sought-after NFTs
                on our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ fontFamily: fonts, borderColor: colors.primary }}
              >
                <div className="relative flex h-[200px] flex-col items-center justify-center">
                  <IconUser stroke={2} className="h-10 w-10" />
                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ fontFamily: fonts, background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    John Doe
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Creator" />
                      <AvatarFallback style={{ fontFamily: fonts }}>
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-gray-600"
                      style={{ fontFamily: fonts }}
                    >
                      @johndoe
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      12.5K ETH
                    </span>
                    <Button
                      className="text-white"
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ fontFamily: fonts, borderColor: colors.primary }}
              >
                <div className="relative flex h-[200px] flex-col items-center justify-center">
                  <IconUser stroke={2} className="h-10 w-10" />
                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ fontFamily: fonts, background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Sarah Anderson
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span
                      className="text-gray-600"
                      style={{ fontFamily: fonts }}
                    >
                      @sarahanderson
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      12.5K ETH
                    </span>
                    <Button
                      className="text-white"
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ fontFamily: fonts, borderColor: colors.primary }}
              >
                <div className="relative flex h-[200px] flex-col items-center justify-center">
                  <IconUser stroke={2} className="h-10 w-10" />
                  <div
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
                    style={{ fontFamily: fonts, background: colors.muted }}
                  >
                    <IconHeart stroke={2} />
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    Michael Johnson
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Creator" />
                      <AvatarFallback style={{ fontFamily: fonts }}>
                        MJ
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-gray-600"
                      style={{ fontFamily: fonts }}
                    >
                      @michaeljohnson
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold"
                      style={{ fontFamily: fonts, color: colors.primary }}
                    >
                      12.5K ETH
                    </span>
                    <Button
                      className="text-white"
                      style={{ fontFamily: fonts, background: colors.primary }}
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

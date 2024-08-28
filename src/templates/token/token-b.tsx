"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { tokenProjectSchema } from "@/lib/schemas/create-project";
import { Input } from "@/components/ui/input";
import { Sparkle } from "lucide-react";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import { IdProps } from "@/lib/customizableTemplateItems";

export default function TokenB({ id }: IdProps) {
  const dappSettings = JSON.parse(localStorage.getItem("dappSettings") || "{}");
  const projectName = dappSettings.projectName || "Project Name";
  const fonts = dappSettings.fontOption || "Inter";
  const colors = useDappColors(dappSettings.colorOption || "Twilight");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof tokenProjectSchema>>({
    resolver: zodResolver(tokenProjectSchema),
    defaultValues: {
      projectName: "" ?? projectName,
      projectDescription:
        "A decentralized cryptocurrency that aims to revolutionize the way we think about digital assets.",
    },
  });
  const [isEditingProjectName, setIsEditingProjectName] = useState(false);
  const [isEditingProjectDescription, setIsEditingProjectDescription] =
    useState(false);

  const onSubmit = (data: z.infer<typeof tokenProjectSchema>) => {
    console.log(data);
  };

  const projectNameEdit = watch("projectName");
  const projectDescription = watch("projectDescription");

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <section className="w-full py-12 lg:py-32 md:py-24">
          <div className="container grid gap-6 px-4 lg:grid-cols-[1fr_400px] lg:gap-12 md:px-6 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              {/* {isEditingProjectName ? (
                <div className="flex gap-3">
                  <Input
                    placeholder="e.g. CryptoToken"
                    className="!w-full rounded placeholder:text-muted-foreground"
                    icon={<Sparkle className="text-primary" />}
                    {...register("projectName")}
                  />
                  <button
                    type="button"
                    onClick={() => setIsEditingProjectName(false)}
                    className="text-primary"
                  >
                    <IconCheck stroke={2} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingProjectName(false);
                    }}
                    className="text-primary"
                  >
                    <IconX stroke={2} />
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    style={{ fontFamily: fonts }}
                  >
                    {projectNameEdit} CryptoToken
                  </h1>
                  <button
                    type="button"
                    onClick={() => setIsEditingProjectName(true)}
                    className="text-primary"
                  >
                    <IconPencil stroke={2} />
                  </button>
                </div>
              )} */}
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                style={{ fontFamily: fonts }}
              >
                {projectName}
              </h1>
              {isEditingProjectDescription ? (
                <div className="flex w-full gap-3">
                  <Input
                    placeholder="e.g. I want to build a dApp to trade Stable Coins"
                    className="!w-full rounded placeholder:text-muted-foreground"
                    icon={<Sparkle className="text-primary" />}
                    {...register("projectDescription")}
                  />
                  <button
                    type="button"
                    onClick={() => setIsEditingProjectDescription(false)}
                    className="text-primary"
                  >
                    <IconCheck stroke={2} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingProjectDescription(false);
                    }}
                    className="text-primary"
                  >
                    <IconX stroke={2} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <p
                    className="max-w-[600px] md:text-xl"
                    style={{ fontFamily: fonts }}
                  >
                    {projectDescription}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsEditingProjectDescription(true)}
                    className="text-primary"
                  >
                    <IconPencil stroke={2} />
                  </button>
                </div>
              )}

              <div className="min-[400px]:flex-row flex flex-col gap-2">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  style={{
                    fontFamily: fonts,
                    background: colors?.secondary,
                    color: colors?.background,
                  }}
                >
                  Buy {projectName}
                </Link>
              </div>
            </div>
            <Image
              src="/farm-platform.svg"
              width={600}
              height={600}
              alt="CryptoToken"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
            />
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
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                  style={{ fontFamily: fonts, color: colors?.secondary }}
                >
                  Key Features
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  What Makes {projectName} Unique?
                </h2>
                <p
                  className="max-w-[900px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  {projectName} is designed to provide a secure, decentralized,
                  and scalable platform for digital asset transactions.
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
                        style={{ fontFamily: fonts, color: colors?.secondary }}
                      >
                        Decentralized
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        {projectName} is built on a decentralized blockchain
                        network, ensuring transparency and security.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.secondary }}
                      >
                        Fast Transactions
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        {projectName}'s advanced technology enables
                        lightning-fast transactions with low fees.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: fonts, color: colors?.secondary }}
                      >
                        Scalable
                      </h3>
                      <p style={{ fontFamily: fonts }}>
                        The {projectName} network is designed to scale
                        efficiently, ensuring it can handle growing demand.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/farm-platform.svg"
                width={550}
                height={310}
                alt="CryptoToken Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last sm:w-full"
              />
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 lg:py-32 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                  style={{ fontFamily: fonts, color: colors?.secondary }}
                >
                  Meet the Team
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts, color: colors?.foreground }}
                >
                  The Minds Behind CryptoToken
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts, color: colors?.foreground }}
                >
                  Our team of experienced blockchain developers and financial
                  experts are dedicated to making CryptoToken a success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback
                    style={{ fontFamily: fonts, color: colors?.secondary }}
                  >
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: fonts, color: colors?.foreground }}
                  >
                    John Doe
                  </h3>

                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: fonts, color: colors?.muted }}
                  >
                    Co-Founder, CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback
                    style={{ fontFamily: fonts, color: colors?.secondary }}
                  >
                    JA
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Jane Appleseed</h3>

                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: fonts, color: colors?.muted }}
                  >
                    Co-Founder, CTO
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />

                  <AvatarFallback
                    style={{ fontFamily: fonts, color: colors?.secondary }}
                  >
                    {" "}
                    KS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Kara Sato</h3>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: fonts, color: colors?.muted }}
                  >
                    Head of Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className="w-full bg-muted py-12 lg:py-32 md:py-24">
          <div className="container grid items-center gap-6 px-4 lg:grid-cols-2 lg:gap-10 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Invest in the Future of Cryptocurrency
              </h2>

              <p
                className="max-w-[600px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                style={{ fontFamily: fonts }}
              >
                CryptoToken is available for purchase on leading cryptocurrency
                exchanges. Join the movement and be a part of the decentralized
                revolution.
              </p>
            </div>
            <div className="min-[400px]:flex-row flex flex-col gap-2 lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                style={{
                  fontFamily: fonts,
                  background: colors?.secondary,
                  color: colors?.background,
                }}
              >
                Buy CryptoToken
              </Link>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

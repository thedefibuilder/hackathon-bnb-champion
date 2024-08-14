"use client";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import { useEffect } from "react";
import WebFont from "webfontloader";

export default function TokneTornado() {
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
        <section className="w-full border-y pt-12 lg:pt-32 md:pt-24">
          <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="grid gap-4 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center">
                  <img
                    src="/project-logo.png"
                    width={48}
                    height={48}
                    alt="Token Logo"
                    className="mr-2"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <h1
                    className="text-4xl font-bold"
                    style={{ fontFamily: fonts }}
                  >
                    {projectName}
                  </h1>
                </div>
                <p className="md:text-xl" style={{ fontFamily: fonts }}>
                  A decentralized token that revolutionizes the way you interact
                  with the blockchain.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts, background: colors?.primary }}
                  >
                    Buy Token
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    style={{ fontFamily: fonts }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/farm-platform.svg"
                  width={400}
                  height={400}
                  alt="Token Illustration"
                  className="max-w-full"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-muted py-12 lg:py-32 md:py-24"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  Key Features
                </h2>
                <p
                  className="max-w-[900px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Discover the powerful features that make {projectName} the
                  ultimate cryptocurrency solution.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 lg:max-w-5xl lg:grid-cols-3 md:gap-12 sm:max-w-4xl sm:grid-cols-2">
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Fast Transactions
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Experience lightning-fast transactions with {projectName}'s
                  advanced blockchain technology.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Low Fees
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Enjoy minimal transaction fees, making {projectName} a
                  cost-effective choice for your cryptocurrency needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Secure Ecosystem
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Benefit from {projectName}'s robust security measures,
                  ensuring the safety of your digital assets.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Decentralized Governance
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Participate in the decentralized governance of {projectName}{" "}
                  and shape the future of the platform.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Passive Income
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Earn passive income by staking your Token Name tokens and
                  contributing to the network.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Cross-Chain Compatibility
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Seamlessly integrate Token Name with other blockchain
                  networks, expanding your financial opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="roadmap" className="w-full py-12 lg:py-32 md:py-24">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  style={{ fontFamily: fonts }}
                >
                  Roadmap
                </h2>
                <p
                  className="max-w-[900px] lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: fonts }}
                >
                  Discover the milestones and development plans for{" "}
                  {projectName}, ensuring a bright future for the project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 lg:max-w-5xl lg:grid-cols-3 md:gap-12 sm:max-w-4xl sm:grid-cols-2">
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Q1 2023
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Token launch and initial exchange listing.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Q2 2023
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Decentralized exchange integration and staking program launch.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Q3 2023
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Governance model implementation and community-driven
                  development initiatives.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  Q4 2023
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Cross-chain bridges and integration with major DeFi protocols.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  2024
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Expansion into new markets, strategic partnerships, and
                  ecosystem growth.
                </p>
              </div>
              <div className="grid gap-1">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: fonts, color: colors?.primary }}
                >
                  2025
                </h3>
                <p className="text-sm" style={{ fontFamily: fonts }}>
                  Continued innovation, protocol upgrades, and mainstream
                  adoption.
                </p>
              </div>
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
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 md:px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 {projectName}. All rights reserved.
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

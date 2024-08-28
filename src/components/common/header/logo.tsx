import React from "react";

import Image from "next/image";
import Link from "next/link";

import { ENavRoutesPath } from "@/lib/routes/nav";

export function LogoWithTitle() {
  return (
    <Link href={ENavRoutesPath.home}>
      <Image
        src="/greenpress-logo.png"
        alt="DeFi Builder's logo"
        width={190}
        height={30}
        className="hidden dark:block"
      />
      <Image
        src="/logo-title-light.png"
        alt="DeFi Builder's logo"
        width={190}
        height={30}
        className="block dark:hidden"
      />
    </Link>
  );
}

type TLogoProps = {
  width?: number;
  height?: number;
};

export function Logo({ width = 190, height = 30 }: TLogoProps) {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  return (
    <>
      <Image
        src="/greenpress-icon.svg"
        alt="DeFi Builder's logo"
        width={width}
        height={height}
        className="hidden h-10 w-10 dark:block"
      />
      <Image
        src="/greenpress-icon.svg"
        alt="DeFi Builder's logo"
        width={width}
        height={height}
        className="block dark:hidden"
      />
    </>
  );
}

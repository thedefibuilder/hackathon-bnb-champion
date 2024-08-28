import React from "react";

import { LogoWithTitle } from "./logo";
import DappWalletButton from "src/components/dapp-wallet-button";
import { navRoutes } from "@/lib/routes/nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="fixed z-50 flex h-20 w-full justify-between border-b border-border bg-black p-5">
      <nav className="flex h-full w-9/12 items-center gap-x-5">
        <LogoWithTitle />

        {navRoutes.map((route, index) => {
          return (
            <Link
              key={index}
              href={route.path}
              className={cn(
                "text-white hover:text-primary",
                route.name === "Find out more on DoraHacks"
                  ? "rounded bg-primary-light px-4 text-black lg:py-2"
                  : "",
              )}
            >
              {route.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex h-full items-center justify-center">
        <DappWalletButton />
      </div>
    </header>
  );
}

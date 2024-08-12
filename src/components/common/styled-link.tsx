import React from "react";

import type { ButtonProps } from "@/components/ui/button";
import type { UrlObject } from "node:url";
import type { HTMLAttributeAnchorTarget } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TStyledLink = ButtonProps & {
  href: string | UrlObject;
  target?: HTMLAttributeAnchorTarget;
};

export default function StyledLink({
  href,
  target,
  variant,
  children,
  className,
  disabled,
  ...otherButtonProperties
}: TStyledLink) {
  return (
    <Button
      variant={variant}
      className={cn(
        { "h-fit px-0 py-0 text-foreground": variant === "link" },
        className,
      )}
      disabled
      asChild
      {...otherButtonProperties}
    >
      <Link
        href={href}
        target={target}
        className={cn({ "pointer-events-none": disabled })}
      >
        {children}
      </Link>
    </Button>
  );
}

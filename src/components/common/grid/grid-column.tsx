import React from "react";

import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const columnVariants = cva(
  ["max-w-full", "lg:px-[16px]", "md:px-[16px]", "sm:px-[8px]"],
  {
    variants: {
      lg: {
        12: "lg:w-full",
        11: "lg:w-11/12",
        10: "lg:w-10/12",
        9: "lg:w-9/12",
        8: "lg:w-8/12",
        7: "lg:w-7/12",
        6: "lg:w-6/12",
        5: "lg:w-5/12",
        4: "lg:w-4/12",
        3: "lg:w-3/12",
        2: "lg:w-2/12",
        1: "lg:w-1/12",
      },
      lgOffset: {
        11: "lg:ml-[91.666667%]",
        10: "lg:ml-[83.333333%]",
        9: "lg:ml-[75%]",
        8: "lg:ml-[66.666667%]",
        7: "lg:ml-[58.333333%]",
        6: "lg:ml-[50%]",
        5: "lg:ml-[41.666667%]",
        4: "lg:ml-[33.333333%]",
        3: "lg:ml-[25%]",
        2: "lg:ml-[16.666667%]",
        1: "lg:ml-[8.333333%]",
      },
      md: {
        6: "md:w-full",
        5: "md:w-5/6",
        4: "md:w-4/6",
        3: "md:w-3/6",
        2: "md:w-2/6",
        1: "md:w-1/6",
      },
      mdOffset: {
        5: "md:ml-[83.333333%]",
        4: "md:ml-[66.666667%]",
        3: "md:ml-[50%]",
        2: "md:ml-[33.333333%]",
        1: "md:ml-[16.666667%]",
      },
      sm: {
        4: "sm:w-full",
        3: "sm:w-3/4",
        2: "sm:w-2/4",
        1: "sm:w-1/4",
      },
      smOffset: {
        3: "sm:ml-[75%]",
        2: "sm:ml-[50%]",
        1: "sm:ml-[25%]",
      },
    },
  },
);

export interface ContainerProps
  extends Pick<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      "className" | "children"
    >,
    Pick<VariantProps<typeof columnVariants>, "lg" | "md" | "sm">,
    Pick<
      VariantProps<typeof columnVariants>,
      "lgOffset" | "mdOffset" | "smOffset"
    > {}

export const GridCol = ({
  children,
  className,
  lg = 12,
  md = 6,
  sm = 4,
  lgOffset,
  mdOffset,
  smOffset,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        columnVariants({ lg, md, sm, lgOffset, mdOffset, smOffset, className }),
      )}
    >
      {children}
    </div>
  );
};

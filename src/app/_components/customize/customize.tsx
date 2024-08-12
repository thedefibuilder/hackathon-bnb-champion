import React, { useEffect } from "react";

import type { ThemeColors, ThemeName } from "@/lib/hooks/use-dapp-colors";
import type { createProjectSchema } from "@/lib/schemas/create-project";
import type { useForm } from "react-hook-form";
import type { z } from "zod";

import dynamic from "next/dynamic";
import WebFont from "webfontloader";

import { Skeleton } from "@/components/ui/skeleton";
import { getChainConfig } from "@/lib/chains";
import useDappColors from "@/lib/hooks/use-dapp-colors";
import { type TFontItem } from "@/lib/server-actions";
import { Col, Row } from "@/components/common/grid";
import Token from "../dapp/token";

type TCustomizeProps = {
  form: ReturnType<typeof useForm<z.infer<typeof createProjectSchema>>>;
  scrollToTop: () => void;
  fonts?: TFontItem[];
};

const CustomizeHero = dynamic(() => import("@/components/common/hero"), {
  loading: () => <Skeleton className="h-[170px] w-full sm:h-[222px]" />,
  ssr: false,
});

const CustomizeOptions = dynamic(() => import("./customize-options"), {
  loading: () => (
    <Skeleton className="h-[222px] w-full lg:h-[170px] md:h-[450px]" />
  ),
  ssr: false,
});

const CustomizeFooter = dynamic(() => import("./customize-footer"), {
  loading: () => <Skeleton className="h-[170px] w-full md:h-[220px]" />,
  ssr: false,
});

export default function Customize({
  form,
  scrollToTop,
  fonts,
}: TCustomizeProps) {
  const projectName = form.watch("name");
  const projectChainId = form.watch("chainId");
  const projectChain = getChainConfig(projectChainId);
  const colorsValues = form.watch("dapp.colorOption");
  const themeName: ThemeName = colorsValues as ThemeName;
  const colors: ThemeColors = useDappColors(themeName);
  const selectedFont = form.watch("dapp.fontOption");
  const icons = form.watch("dapp.socialOption");

  useEffect(() => {
    if (selectedFont) {
      WebFont.load({
        google: {
          families: [selectedFont],
        },
      });
    }
  }, [selectedFont]);

  return (
    <>
      <CustomizeHero projectName={projectName} projectChain={projectChain} />
      <div className="h-12" />
      <Row>
        <Col lg={6}>
          <h1 className="text-3xl font-bold lg:text-[32px]">
            Customize your dApp
          </h1>
        </Col>
      </Row>
      <div className="h-10 md:h-10" />
      <Row>
        <Col lg={3} md={2}>
          <CustomizeOptions form={form} fonts={fonts} />
        </Col>
        <Col lg={9} md={4}>
          <div className="h-8 lg:hidden md:hidden" />
          <Token
            colors={colors}
            fonts={selectedFont}
            projectName={projectName}
            icons={icons}
          />
          <div className="h-8" />
          <CustomizeFooter form={form} scrollToTop={scrollToTop} />
        </Col>
      </Row>
      <div className="h-12" />
    </>
  );
}

import React from "react";

import type { ThemeColors } from "@/lib/hooks/use-dapp-colors";

import { Col, Row } from "@/components/common/grid";
import DappHeader from "./dapp-header";
import DappBanner from "./dapp-banner";
import { LaunchpadTabs } from "./dapp-tab";
import DappCard from "./dapp-card";

export type TTokenProps = {
  colors?: ThemeColors;
  fonts?: string;
  projectName?: string;
  icons?: Record<string, string>;
};

export default function Token({
  colors,
  fonts,
  projectName,
  icons,
}: TTokenProps) {
  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <>
      <Row>
        <Col>
          <DappHeader projectName={projectName} fonts={fonts} icons={icons} />
        </Col>
      </Row>
      <Row className="flex lg:hidden">
        <Col>
          <div className="h-8" />
          <DappBanner colors={colors} fonts={fonts} />
        </Col>
      </Row>
      <div className="h-6 lg:h-8" />
      <Row>
        <Col lg={8} md={6}>
          <div className="hidden lg:block">
            <DappBanner colors={colors} fonts={fonts} />
          </div>
          <div className="lg:h-8" />
          <LaunchpadTabs colors={colors} fonts={fonts} />
          <div className="h-6 md:h-8" />
        </Col>
        <Col lg={4} md={6}>
          <DappCard targetDate={targetDate} colors={colors} fonts={fonts} />
        </Col>
      </Row>
      <div className="h-10 sm:h-0" />
    </>
  );
}

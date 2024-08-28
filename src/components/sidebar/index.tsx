"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  IconBoxMargin,
  IconHeading,
  IconLayoutDashboard,
  IconPhoto,
  IconSettings,
  IconSquareRoundedPlus,
  IconTableOptions,
} from "@tabler/icons-react";
import { Col, Row } from "../common/grid";
import SidebarItem from "./sidebar-item";
import SidebarSettings from "./sidebar-settings";
import { TFontItem } from "@/lib/server-actions";
import {
  sidebarButton,
  sidebarContainer,
  sidebarGrid,
  sidebarHeading,
  sidebarImage,
  sidebarTextEditor,
} from "@/lib/sidebar-item";

type TabItem = {
  value: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

export default function Sidebar({ fonts }: { fonts: TFontItem[] }) {
  const tabItems: TabItem[] = [
    {
      value: "customize",
      label: "Customize",
      icon: <IconTableOptions stroke={2} />,
      content: (
        <>
          <div className="h-3" />
          <Row>
            <Col
              lg={undefined}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <h2 className="text-s">Layout Elements</h2>
            </Col>
          </Row>
          <Row className="mb-4 mt-6">
            <Col
              lg={6}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <SidebarItem item={sidebarContainer} />
              <div className="md:h-4" />
            </Col>
            <Col
              lg={6}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <SidebarItem item={sidebarGrid} />
            </Col>
          </Row>
          <div className="h-3" />
          <Row>
            <Col
              lg={undefined}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <h2>Customize Elements</h2>
            </Col>
          </Row>
          <Row className="mb-4 mt-6">
            <Col
              lg={6}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <SidebarItem item={sidebarHeading} />
              <div className="md:h-4" />
            </Col>
            <Col
              lg={6}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <SidebarItem item={sidebarImage} />
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <SidebarItem item={sidebarTextEditor} />
              <div className="md:h-4" />
            </Col>
            <Col
              lg={6}
              md={undefined}
              sm={undefined}
              lgOffset={undefined}
              mdOffset={undefined}
              smOffset={undefined}
            >
              <SidebarItem item={sidebarButton} />
            </Col>
          </Row>
        </>
      ),
    },
    {
      value: "settings",
      label: "Settings",
      icon: <IconSettings stroke={2} />,
      content: <SidebarSettings fonts={fonts} />,
    },
  ];

  return (
    <div className="top-18 fixed left-0 z-20 h-screen transition-all duration-500 ease-in-out lg:mt-4 md:h-[calc(100vh-70px)]">
      <div className="relative flex h-full flex-col items-center shadow-md dark:shadow-zinc-800 lg:px-5 md:px-5">
        <Tabs defaultValue="customize" className="w-full">
          <TabsList className="w-full justify-between gap-4 bg-transparent">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-3 rounded-none pb-4 data-[state=active]:border-b-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabItems.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="w-[303px]"
            >
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

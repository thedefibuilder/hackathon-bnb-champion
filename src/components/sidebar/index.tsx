"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  IconAlignJustified,
  IconBoxMargin,
  IconHeading,
  IconLayoutDashboard,
  IconPhoto,
  IconSettings,
  IconSquareRoundedPlus,
  IconTableOptions,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Col, Container, Row } from "../common/grid";
import SidebarItem from "./sidebar-item";
import SidebarSettings from "./sidebar-settings";
import { DndContext } from "@dnd-kit/core";
import { TFontItem } from "@/lib/server-actions";

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
            <Col>
              <h2 className="text-s">Layout Components</h2>
            </Col>
          </Row>
          <Row className="mb-4 mt-6">
            <Col lg={6}>
              <SidebarItem
                tablerIcon={IconBoxMargin}
                title="Container"
                id={"1"}
              />
            </Col>
            <Col lg={6}>
              <SidebarItem
                tablerIcon={IconLayoutDashboard}
                title="Grid"
                id={"2"}
              />
            </Col>
          </Row>
          <div className="h-3" />
          <Row>
            <Col>
              <h2>Customize Components</h2>
            </Col>
          </Row>
          <Row className="mb-4 mt-6">
            <Col lg={6}>
              <SidebarItem
                tablerIcon={IconAlignJustified}
                title="Text Block"
                id={"3"}
              />
            </Col>
            <Col lg={6}>
              <SidebarItem tablerIcon={IconHeading} title="Heading" id={"4"} />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <SidebarItem tablerIcon={IconPhoto} title="Image" id={"5"} />
            </Col>
            <Col lg={6}>
              <SidebarItem
                tablerIcon={IconSquareRoundedPlus}
                title="Button"
                id={"6"}
              />
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
    <DndContext>
      <aside className="top-18 fixed left-0 z-20 h-screen transition-all duration-500 ease-in-out lg:mt-4 md:h-[calc(100vh-70px)]">
        <div className="relative flex h-full flex-col items-center shadow-md dark:shadow-zinc-800 lg:px-5 md:px-5">
          <Tabs defaultValue="customize" className="w-full">
            <TabsList className="w-full justify-between gap-4 bg-transparent">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-3 rounded-none pb-4 data-[state=active]:border-b-[2px] data-[state=active]:border-primary"
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
      </aside>
    </DndContext>
  );
}

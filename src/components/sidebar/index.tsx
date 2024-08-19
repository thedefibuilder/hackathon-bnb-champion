"use client";

import React from "react";
import { Col, Container, Row } from "../common/grid";
import SidebarItem from "./sidebar-item";
import {
  DribbbleIcon,
  ImageIcon,
  SquarePlusIcon,
  TextIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="top-18 fixed left-0 z-20 h-screen transition-all duration-500 ease-in-out lg:mt-4 md:h-[calc(100vh-70px)]">
      <div className="relative flex h-full flex-col items-center shadow-md dark:shadow-zinc-800 lg:px-5 md:px-5">
        <Container>
          <Row className="mb-4">
            <Col lg={6}>
              <SidebarItem lucideIcon={TextIcon} title="Text Block" id={"1"} />
            </Col>
            <Col lg={6}>
              <SidebarItem lucideIcon={ImageIcon} title="Image" id={"2"} />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <SidebarItem
                lucideIcon={SquarePlusIcon}
                title="Button"
                id={"3"}
              />
            </Col>
            <Col lg={6}>
              <SidebarItem
                lucideIcon={DribbbleIcon}
                title="Socials Bar"
                id={"4"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </aside>
  );
}

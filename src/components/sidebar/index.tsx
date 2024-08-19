"use client";

import React from "react";
import { Col, Container, Row } from "../common/grid";
import SidebarItem from "./sidebar-item";
import { sidebarItemsArray } from "@/lib/sidebar-item";

export default function Sidebar() {
  return (
    <aside className="top-18 fixed left-0 z-20 h-screen transition-all duration-500 ease-in-out lg:mt-4 md:h-[calc(100vh-70px)]">
      <div className="relative flex h-full flex-col items-center shadow-md dark:shadow-zinc-800 lg:px-5 md:px-5">
        <Container className="m-4 grid grid-cols-2">
          {sidebarItemsArray.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </Container>
      </div>
    </aside>
  );
}

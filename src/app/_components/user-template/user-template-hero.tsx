"use client";
import { Col, Container, Row } from "@/components/common/grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import CategoryTemplateFilter from "../template/category-template-filter";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function UserTemplateHero() {
  return (
    <>
      {" "}
      <div className="h-6" />
      <Row>
        <Col lg={10} md={4}>
          <h4 className="text-3xl">My Templates:</h4>
          <div className="h-6" />

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-5xl">Web3 Degen</p>
          </div>
          <div className="h-8" />
          <div className="lg:w-[80%] md:hidden">
            <CategoryTemplateFilter />
          </div>
        </Col>
        <Col lg={2} md={2} className="rounded-[16px] bg-second-place">
          <div className="h-2" />
          <Link
            className="text-[40px] font-bold text-primary hover:no-underline"
            href="/manage/upload"
          >
            Sell your own template
          </Link>
        </Col>
      </Row>
      <Row className="hidden md:flex">
        <Col>
          <div className="h-8" />
          <CategoryTemplateFilter />
        </Col>
      </Row>
    </>
  );
}

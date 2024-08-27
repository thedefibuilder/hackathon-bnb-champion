"use client";
import { Col, Row } from "src/components/common/grid";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Sparkle } from "lucide-react";
import React from "react";
import CategoryTemplateFilter from "./category-template-filter";

export default function TemplateFilter() {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="flex w-full items-center gap-3">
            <div className="w-full">
              <Input
                placeholder="e.g. I want to build a dApp to trade Stable Coins"
                className="!w-full rounded-[14px] border-primary placeholder:text-muted-foreground"
                icon={<Sparkle className="text-primary" />}
              />
            </div>
            <Button>Search Template</Button>
          </div>
        </Col>
      </Row>
      <div className="h-6" />
      <Row>
        <Col>
          <CategoryTemplateFilter />
        </Col>
      </Row>
    </>
  );
}

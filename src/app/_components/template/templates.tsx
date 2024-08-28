"use client";

import { Col, Row } from "src/components/common/grid";
import {
  IconArchive,
  IconFlame,
  IconPhotoHeart,
  IconPokerChip,
  IconWritingSign,
} from "@tabler/icons-react";
import TemplateCard from "./template-card";
import { templateItemsMap } from "@/lib/templates-item";
import { useFormContext } from "react-hook-form";
import { TCategoryFilter } from "@/lib/schemas/category-filter";

export const categoryMap: { [key: string]: string } = {
  "Token Landing Page": "token",
  "NFT Collection Page": "nft",
  "DAO Voting dApp": "dao",
  "Web3 Blogging": "blog",
  "Show All": "all",
};

export default function Templates() {
  const { watch } = useFormContext<TCategoryFilter>();
  const selectedCategory = watch("category");

  const allItems = Object.values(templateItemsMap);
  const categoryKey = categoryMap[selectedCategory] || "all";

  const filteredItems =
    categoryKey !== "all"
      ? allItems.filter((item) => item.category === categoryKey)
      : allItems;

  const tokenItems = allItems.filter((item) => item.category === "token");
  const enftItems = allItems.filter((item) => item.category === "nft");
  const daoItems = allItems.filter((item) => item.category === "dao");
  const blogItems = allItems.filter((item) => item.category === "blog");

  return !selectedCategory || selectedCategory === "Show All" ? (
    <>
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconFlame stroke={2} className="h-8 w-8" />
            <h2 className="font-medium">All Templates</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {allItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <TemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconPokerChip stroke={2} className="h-8 w-8" />
            <h2 className="font-medium">Token Landing Page</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {tokenItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <TemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconPhotoHeart stroke={2} className="h-8 w-8" />
            <h2 className="font-medium">NFT Collection Page</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {enftItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <TemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconArchive stroke={2} className="h-8 w-8" />
            <h2 className="font-medium">DAO Voting dApp</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {daoItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <TemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconWritingSign stroke={2} className="h-8 w-8" />
            <h2 className="font-medium">Blog</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {blogItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <TemplateCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  ) : (
    <>
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconFlame stroke={2} className="h-8 w-8" />
            <h2 className="font-medium">{`${selectedCategory} Templates`}</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {filteredItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <TemplateCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

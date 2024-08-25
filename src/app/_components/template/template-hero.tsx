import React from "react";

import { Sparkle } from "lucide-react";
import Image from "next/image";
import { Button } from "src/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import BannerContainer from "src/components/common/banner-container";
import { Col, Row } from "src/components/common/grid";
import { Input } from "src/components/ui/input";
import WordRotate from "src/components/magicui/word-rotate";
import TemplateFilter from "./template-filter";

export default function TemplateHero() {
  return (
    <Row className="relative">
      <Col lg={7} md={4}>
        <div className="w-full text-white">
          <h1 className="text-2xl font-bold lg:w-full sm:text-2xl xl:text-[80px]">
            <span className="flex items-center gap-8">
              Your{" "}
              <span className="text-primary">
                <WordRotate
                  className="text-3xl font-extrabold lg:w-full sm:text-2xl xl:text-[80px]"
                  words={[
                    "Web3 Blog",
                    "Token Page",
                    "NFT Collection",
                    "DAO Platform",
                  ]}
                />{" "}
              </span>
            </span>
            delivered in minutes
          </h1>
          <div className="h-4 lg:h-10 md:h-6" />
          <p className="text-xl">
            Bring your ideas to life with community-built resource, your
            decentralized future starts here!
          </p>
          <div className="h-4" />
          <TemplateFilter />
        </div>
      </Col>
      <Col lg={5}>
        <Image
          src="/template-main.png"
          alt="Hero Main"
          width={811}
          height={505}
          className="flex w-full justify-end"
        />
      </Col>
    </Row>
  );
}

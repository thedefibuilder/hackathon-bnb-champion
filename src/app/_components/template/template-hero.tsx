import React from "react";

import { Sparkle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import BannerContainer from "@/components/common/banner-container";
import { Col, Row } from "@/components/common/grid";
import { Input } from "@/components/ui/input";
import WordRotate from "@/components/magicui/word-rotate";

export default function TemplateHero() {
  return (
    <BannerContainer>
      <Row className="relative w-full">
        <Col lg={8} md={4}>
          <Image
            src="/hero-main.svg"
            alt="Hero Main"
            width={411}
            height={305}
            className="right-0 h-full lg:absolute lg:-bottom-6 lg:h-[300px] md:absolute md:-right-40 md:-top-8 md:h-[150px] md:w-[1800px] sm:h-[150px]"
          />
          <div className="w-full text-white">
            <div className="h-6" />
            <h1 className="text-2xl font-bold lg:w-full sm:text-2xl xl:text-4xl">
              Your{" "}
              <span className="text-primary">
                <WordRotate
                  className="text-3xl font-extrabold lg:w-full sm:text-2xl xl:text-4xl"
                  words={[
                    "Web3 Blog",
                    "Token Page",
                    "NFT Collection",
                    "DAO Platform",
                  ]}
                />{" "}
              </span>
              delivered in minutes
            </h1>
            <div className="h-4 md:h-6" />
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] text-muted-foreground md:text-xl">
                    What do you want to build today?
                  </FormLabel>
                  <FormMessage />
                  <Row className="items-end">
                    <Col lg={8} md={6}>
                      <FormControl>
                        <Input
                          placeholder="e.g. I want to build a dApp to trade Stable Coins"
                          {...field}
                          className="!w-full rounded-[14px] border-primary placeholder:text-muted-foreground"
                          icon={<Sparkle className="text-primary" />}
                        />
                      </FormControl>
                    </Col>
                    <Col lg={2}>
                      <div className="h-4" />
                      <Button
                        variant="default"
                        type="button"
                        className="bg-primary sm:w-full"
                      >
                        Search Template
                      </Button>
                    </Col>
                  </Row>
                </FormItem>
              )}
            />
          </div>
        </Col>
      </Row>
    </BannerContainer>
  );
}

"use client";

import React from "react";

import type { TChain } from "@/lib/types/chain";
import type { Address } from "viem";

import { ArrowLeft, Copy, CopyCheck } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import useCopyToClipboard from "@/lib/hooks/use-copy-to-clipboard";
import { Col, Container, Row } from "./grid";

type TBannerProps = {
  bannerTitle: string;
  path: string;
  projectName: string;
  contractAddress: Address | null;
  projectChain: TChain | undefined;
};

export default function Baner({
  projectName,
  projectChain,
  bannerTitle,
  path,
  contractAddress,
}: TBannerProps) {
  const searchParams = useSearchParams();
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const handleCopyClick = async () => {
    if (!contractAddress) return;

    await copyToClipboard(contractAddress);
  };
  const action = searchParams.get("action");

  return (
    <Container
      className="bg-secondary-gradient md:bg-main-gradient relative min-h-[160px] rounded-3xl"
      variant="fluid"
    >
      <Row>
        <Col lg={6} md={2} sm={4}>
          <Image
            src="/manage.svg"
            alt="palette icon"
            width={180}
            height={180}
            className="absolute -top-2 left-1.5 h-full sm:hidden"
          />
          <div className="z-35 relative">
            <div className="h-6" />
            <h2 className="font-regular text-xl text-muted-foreground lg:text-[32px]">
              {bannerTitle}
            </h2>
            <div className="h-6" />
            <div className="flex items-center gap-6">
              {/* TODO: Implement project logo upload
                <Image
                  src='/zwappi.svg'
                  alt='zwappi icon'
                  width={64}
                  height={64}
                  className='mh:w-12 h-8 w-8 lg:h-16 lg:w-16 md:h-12'
                /> */}
              <h1 className="text-2xl text-white lg:text-5xl">{projectName}</h1>
            </div>
            <div className="md:h-6" />
          </div>
        </Col>
        <Col
          lg={6}
          md={4}
          sm={4}
          className="relative z-30 lg:flex lg:flex-col lg:items-end"
        >
          <div className="h-6" />
          {action === "deploy" && (
            <div className="flex w-full justify-end">
              <Button
                variant="outline"
                className="hidden items-center gap-3 border-none text-lg text-muted-foreground md:flex lg:flex"
              >
                <ArrowLeft />
                Back to Modules
              </Button>
            </div>
          )}

          {action === "manage" && (
            <div className="flex justify-end sm:justify-start">
              <div className="flex w-40 items-center justify-between gap-3 rounded bg-muted-foreground px-2 px-4 py-1">
                {isCopied ? (
                  <>
                    <p className="truncate">Copied!</p>
                    <button className="h-4 w-4">
                      <CopyCheck className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <p className="truncate">{contractAddress}</p>
                    <button className="h-4 w-4" onClick={handleCopyClick}>
                      <Copy className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
          <div className="md:h-6 lg:h-4" />
          <div className="flex w-full items-center justify-end gap-3 sm:block sm:justify-start lg:flex-col lg:items-end lg:gap-0">
            <p className="text-xs font-light text-white sm:hidden md:hidden">
              Your app will be deployed on:
            </p>
            <div className="h-2" />
            <div className="bg-base inline-flex items-center gap-2 rounded-[14px] px-2 py-1 md:px-4 md:py-3">
              {projectChain?.logoURL && (
                <Image
                  src={projectChain.logoURL}
                  alt={projectChain.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              )}
              <p className="font-medium text-white lg:text-2xl">
                {projectChain?.name}
              </p>
            </div>
          </div>
          <div className="sm:h-4" />
        </Col>
      </Row>
    </Container>
  );
}

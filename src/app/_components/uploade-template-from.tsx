"use client";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Col, Row } from "@/components/common/grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CategoryTemplateFilter from "./template/category-template-filter";
import UploadeImage from "@/components/common/uploade-image";
import UploadeZip from "@/components/common/uploade-zip";
import { IconEqual } from "@tabler/icons-react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { uploadeTemplate } from "@/lib/schemas/create-project";
import useWriteContract from "@/lib/hooks/use-write-contract";
import { bnbChainTestnet } from "@/lib/types/chain";
import { greenPressHubAddress, greePressHubAbi } from "@/lib/greenpress-hub";
import { parseEther } from "viem";
import useReadContract from "@/lib/hooks/use-read-contract";
import { useToast } from "@/components/ui/use-toast";

type TUploadeTemplateFormProps = {
  bnbRate: number | null;
};

export default function UploadeTemplateForm({
  bnbRate,
}: TUploadeTemplateFormProps) {
  const [bnbValue, setBnbValue] = useState("0.00");
  const methods = useForm<z.infer<typeof uploadeTemplate>>({
    resolver: zodResolver(uploadeTemplate),
    defaultValues: {},
  });
  const { control, handleSubmit, watch, register } = methods;
  const usdValue = watch("price");
  const { response: relayFee, readContract: readRelayFee } =
    useReadContract<bigint>(bnbChainTestnet);
  const { writeContract: publishTemplate, response } =
    useWriteContract(bnbChainTestnet);
  const { toast } = useToast();

  useEffect(() => {
    if (bnbRate && usdValue) {
      setBnbValue((parseFloat(usdValue) / bnbRate).toFixed(6));
    } else {
      setBnbValue("0.00");
    }
  }, [bnbRate, usdValue]);

  useEffect(() => {
    readRelayFee(greePressHubAbi, "getRelayFee", greenPressHubAddress);
  }, []);

  useEffect(() => {
    toast({
      title: "Template uploaded",
      description: "Your template has been uploaded successfully.",
    });
  }, [response]);

  const onSubmit = (data: z.infer<typeof uploadeTemplate>) => {
    console.log(data);

    publishTemplate(
      greePressHubAbi,
      "publishTemplate",
      [data.title, parseEther(bnbValue)],
      greenPressHubAddress,
      relayFee ? relayFee : parseEther("0.01"),
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={8}>
            <h1 className="text-5xl">Sell templates</h1>
            <div className="h-6" />
            <p className="text-2xl">
              Get your talent rewarded. Upload a zip with a template and start
              earning
            </p>
          </Col>
          <Col lg={4}>
            <div className="flex w-full justify-end">
              <Button
                variant="outline"
                className="hidden items-center gap-3 border-none text-lg text-muted-foreground lg:flex md:flex"
              >
                <ArrowLeft />
                Back to Create
              </Button>
            </div>
          </Col>
        </Row>
        <div className="h-6" />
        <Row>
          <Col className="rounded-[16px] bg-primary-background">
            <div className="h-4" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-2xl">
                1
              </div>
              <p className="text-2xl">Choose a Category</p>
            </div>
            <div className="h-4" />
            <div className="w-7/12">
              <FormField
                control={control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <CategoryTemplateFilter />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="h-4" />
          </Col>
        </Row>
        <div className="h-6" />
        <Row className="justify-between">
          <Col lg={6} className="!w-[49%] rounded-[16px] bg-primary-background">
            <div className="h-4" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-2xl">
                2
              </div>
              <p className="text-2xl">Add a Price</p>
            </div>
            <div className="h-4" />
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/usd.png"
                  alt="usd"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <Input placeholder="Price in USD" {...register("price")} />
              </div>
              <IconEqual stroke={2} />
              <div className="flex items-center justify-end gap-3">
                <Image
                  src="/bnb.png"
                  alt="bnb"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <p className="text-2xl">{bnbValue} BNB</p>
              </div>
            </div>
            <div className="h-4" />
          </Col>
          <Col lg={6} className="!w-[49%] rounded-[16px] bg-primary-background">
            <div className="h-4" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-2xl">
                3
              </div>
              <p className="text-2xl">Add a catchy title</p>
            </div>
            <div className="h-4" />
            <Input
              placeholder="Type that amazing title here"
              {...register("title")}
            />
            <div className="h-4" />
          </Col>
        </Row>
        <div className="h-6" />
        <Row className="justify-between">
          <Col lg={6} className="!w-[49%] rounded-[16px] bg-primary-background">
            <div className="h-4" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-2xl">
                4
              </div>
              <p className="text-2xl">Add a Description</p>
            </div>
            <div className="h-4" />
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your template in 280 characters."
                      {...field}
                      className="h-52"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="h-4" />
          </Col>
          <Col lg={6} className="!w-[49%] rounded-[16px] bg-primary-background">
            <div className="h-4" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-2xl">
                5
              </div>
              <p className="text-2xl">Upload your files here</p>
            </div>
            <div className="h-4" />
            <div className="flex gap-3">
              <div className="w-1/2">
                <FormField
                  control={control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <UploadeImage id="image" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <UploadeZip id="zip" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="h-4" />
          </Col>
        </Row>
        <div className="h-6" />
        <Row>
          <Col className="rounded-[16px] bg-primary-background">
            <div className="h-4" />
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-2xl">
                  6
                </div>
                <p className="text-2xl">Upload and post on the marketplace</p>
              </div>
              <Button type="submit" className="text-xl">
                Upload Template
              </Button>
            </div>
            <div className="h-4" />
          </Col>
        </Row>
        <div className="h-10" />
      </form>
    </FormProvider>
  );
}

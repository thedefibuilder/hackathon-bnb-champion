import React, { useState } from "react";

import type { CreateProjectProps } from "./project-config";

import { ArrowLeft, PenLine } from "lucide-react";

import BannerContainer from "@/components/common/banner-container";
import { Col, Row } from "@/components/common/grid";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useStepper } from "../stepper";
import { Input } from "@/components/ui/input";

export default function ProjectName({ form }: CreateProjectProps) {
  const [nameIsEdited, setNameIsEdited] = useState(false);

  async function triggerNameEdit() {
    await form.trigger("name");

    if (!form.formState.errors.name) {
      setNameIsEdited(true);
    }
  }

  const projectName = form.watch("name");
  const { prevStep } = useStepper();

  return (
    <BannerContainer>
      {nameIsEdited ? (
        <Row>
          <Col>
            <Row>
              <Col md={3} lg={6} className="mb-4 lg:order-2 md:order-2">
                <div className="flex justify-end sm:justify-start">
                  <Button
                    variant="ghost"
                    className="items-center gap-3 rounded text-lg text-white lg:flex md:flex"
                    type="button"
                    onClick={() => prevStep()}
                  >
                    <ArrowLeft />
                    Back
                  </Button>
                </div>
              </Col>
              <Col md={3} lg={6} className="order-md-1">
                <h1 className="text-2xl font-bold md:text-[32px]">
                  Project Name
                </h1>
                <div className="h-2" />
                <h2 className="text-[16px] md:text-xl">
                  Project names should be short and memorable
                </h2>
              </Col>
            </Row>
            <div className="mt-6 flex items-center gap-4">
              <Avatar className="h-14 w-14 sm:h-10 sm:w-10">
                <AvatarFallback className="!bg-purpel text-2xl font-bold sm:text-xl">
                  <p>{projectName.length > 1 && projectName.slice(0, 2)}</p>
                </AvatarFallback>
              </Avatar>
              <h1 className="truncate text-xl font-semibold text-muted-foreground">
                {projectName}
              </h1>
              <PenLine
                className="h-12 w-12 cursor-pointer sm:h-8 sm:w-8"
                onClick={() => setNameIsEdited(!nameIsEdited)}
              />
            </div>
          </Col>
        </Row>
      ) : (
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Row>
                <Col>
                  <Row>
                    <Col md={3} lg={6} className="mb-4 lg:order-2 md:order-2">
                      <div className="flex justify-end sm:justify-start">
                        <Button
                          variant="ghost"
                          className="items-center gap-3 rounded text-lg text-white lg:flex md:flex"
                          type="button"
                          onClick={() => prevStep()}
                        >
                          <ArrowLeft />
                          Back
                        </Button>
                      </div>
                    </Col>
                    <Col md={3} lg={6} className="order-md-1">
                      <FormLabel className="text-2xl font-bold">
                        Project Name
                      </FormLabel>
                      <FormMessage />
                      <FormDescription className="text-[16px] text-muted-foreground md:text-xl">
                        Give your dApp a cool name
                      </FormDescription>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={10} md={4}>
                      <div className="h-4" />
                      <FormControl>
                        <Input
                          placeholder="MyCoolProject"
                          {...field}
                          className="h-12 w-full rounded-[14px] border-primary"
                        />
                      </FormControl>
                    </Col>
                    <Col lg={2} md={2}>
                      <div className="h-4" />
                      <Button
                        type="button"
                        onClick={triggerNameEdit}
                        className="h-11 w-full rounded-[14px] text-[18px] md:m-0"
                      >
                        Add Name
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FormItem>
          )}
        />
      )}
    </BannerContainer>
  );
}

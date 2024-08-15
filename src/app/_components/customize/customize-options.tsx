import React from "react";

import type { createProjectSchema } from "@/lib/schemas/create-project";
import type { useForm } from "react-hook-form";
import type { z } from "zod";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { customizeOptions, ECustomizeOptions } from "@/lib/customize-options";
import { type TFontItem } from "@/lib/server-actions";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "@/components/ui/combobox";
import { IconWorld } from "@tabler/icons-react";
import { Col, Row } from "@/components/common/grid";

export type TCustomizeOptionsProps = {
  form: ReturnType<typeof useForm<z.infer<typeof createProjectSchema>>>;
  fonts?: TFontItem[];
};

export default function CustomizeOptions({
  form,
  fonts,
}: TCustomizeOptionsProps) {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [customFonts, setCustomFonts] = React.useState<TFontItem[]>([]);
  const fontOptions = customizeOptions[ECustomizeOptions.fonts];
  const colorOptions = customizeOptions[ECustomizeOptions.colors];
  const socialOptions = customizeOptions[ECustomizeOptions.socials];

  const allowedFonts = new Set([
    "Inter",
    "Montserrat",
    "Ubuntu",
    "Plus Jakarta Sans",
    "Space Mono",
  ]);

  console.log(form.formState.errors);

  const filteredFonts =
    fonts?.filter(
      (font) =>
        allowedFonts.has(font.family) &&
        font.family.toLowerCase().includes(searchQuery),
    ) ?? [];

  const handleAddFont = () => {
    if (!searchQuery) return;

    const newFont: TFontItem = {
      family: searchQuery,
      variants: [],
      subsets: [],
      version: "",
      lastModified: "",
      files: {},
      kind: "webfonts#webfont",
    };

    setCustomFonts([newFont, ...customFonts]);
    setSearchQuery("");
  };

  const allFonts = [...customFonts, ...filteredFonts];

  return (
    <>
      <div className="rounded-[14px] border p-4">
        <div className="flex w-full items-center gap-3">
          <IconWorld stroke={2} />
          <h4 className="text-lg font-bold">Domain</h4>
        </div>
        <FormField
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px] text-muted-foreground md:text-xl">
                Get a custom domain and scale your project with BNB Greenfield
                hosting services
              </FormLabel>
              <FormMessage />
              <Row className="items-center">
                <Col>
                  <div className="flex w-full items-center gap-3">
                    <FormControl>
                      <Input
                        placeholder="Add custom domain"
                        {...field}
                        className="!w-[250px] rounded-[14px] placeholder:text-muted-foreground"
                      />
                    </FormControl>
                    <p>.bnb</p>
                  </div>
                </Col>
              </Row>
            </FormItem>
          )}
        />
      </div>
      <div className="h-8" />
      <Accordion type="single">
        <AccordionItem
          value="item-1"
          className="rounded-[14px] border hover:border-primary"
        >
          <AccordionTrigger className="px-3 py-2 text-lg font-bold hover:no-underline">
            <div className="flex items-center gap-2">
              <fontOptions.icon className="h-6 w-6" />
              {fontOptions.name}
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <div className="h-3" />
            <ComboboxDemo
              handleAddFont={handleAddFont}
              fonts={fonts}
              form={form}
            />
            <div className="h-3" />
            <FormField
              control={form.control}
              name="dapp.fontOption"
              render={({ field }) => (
                <ToggleGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  type="single"
                  className="flex flex-col"
                >
                  {allFonts.map((font, index) => (
                    <ToggleGroupItem
                      className="mb-2 w-full justify-between gap-y-2 rounded-[14px] border text-white hover:text-muted-foreground"
                      value={font.family}
                      key={`${font.family}-${index}`}
                    >
                      {font.family}
                      <p className="hidden text-sm text-muted-foreground lg:block">
                        The Quick Fox. @123#
                      </p>
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              )}
            />
          </AccordionContent>
        </AccordionItem>
        <div className="h-4" />
        <AccordionItem
          value="item-2"
          className="rounded-[14px] border hover:border-primary"
        >
          <AccordionTrigger className="px-3 py-2 text-lg font-bold hover:no-underline">
            <div className="flex items-center gap-2">
              <colorOptions.icon className="h-6 w-6" />
              {colorOptions.name}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="h-3" />
            <FormField
              control={form.control}
              name="dapp.colorOption"
              render={({ field }) => (
                <ToggleGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col px-2"
                  type="single"
                >
                  {colorOptions.options.map((option, index) => (
                    <ToggleGroupItem
                      className="mb-2 w-full justify-between gap-y-2 rounded-[14px] border text-white hover:text-muted-foreground"
                      value={option.colorName}
                      key={`${option.colorName}-${index}`}
                    >
                      <p className="hidden lg:block">{option.colorName}</p>
                      <Image
                        src={`/${option.colorName.toLowerCase()}.svg`}
                        alt={`${option.colorName.toLowerCase()}`}
                        width={116}
                        height={20}
                        className="md:w-[100px]"
                      />
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              )}
            />
          </AccordionContent>
        </AccordionItem>
        <div className="h-4" />
        <AccordionItem
          value="item-3"
          className="rounded-[14px] border hover:border-primary"
        >
          <AccordionTrigger className="px-3 py-2 text-lg font-bold hover:no-underline">
            <div className="flex items-center gap-2">
              <socialOptions.icon className="h-6 w-6" />
              {socialOptions?.name}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="h-3" />
            {socialOptions?.options.map((option, index) => (
              <div key={`${option.socialName}-${index}`} className="px-3">
                <Label className="pl-2">{option.socialName}</Label>
                <div className="h-2" />
                <FormField
                  control={form.control}
                  name={`dapp.socialOption.${option.socialName}`}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder={`https://${option.socialName.toLowerCase()}.com/username`}
                    />
                  )}
                />
                <div className="h-2" />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

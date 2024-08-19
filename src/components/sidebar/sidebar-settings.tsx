"use client";
import { dappSetting } from "@/lib/schemas/create-project";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconWorld } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Col, Row } from "../common/grid";
import { Input } from "../ui/input";

import { ComboboxDemo } from "../ui/combobox";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Label } from "../ui/label";
import Image from "next/image";
import { TFontItem } from "@/lib/server-actions";
import { customizeOptions, ECustomizeOptions } from "@/lib/customize-options";
import React, { useEffect } from "react";
import WebFont from "webfontloader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function SidebarSettings({ fonts }: { fonts: TFontItem[] }) {
  const dappSettingForm = useForm<z.infer<typeof dappSetting>>({
    resolver: zodResolver(dappSetting),
    defaultValues: {},
  });

  const { watch, control } = dappSettingForm;

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

  const selectedFont = watch("fontOption");

  useEffect(() => {
    if (selectedFont) {
      WebFont.load({
        google: {
          families: [selectedFont],
        },
      });
    }
  }, [selectedFont]);

  const filteredFonts =
    fonts?.filter(
      (font) =>
        allowedFonts.has(font.family) &&
        font.family.toLowerCase().includes(searchQuery.toLowerCase()),
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
    <Form {...dappSettingForm}>
      <form>
        <div className="h-4" />
        <div className="rounded-[14px] border p-4">
          <div className="flex w-full items-center gap-3">
            <IconWorld stroke={2} />
            <h4 className="text-lg font-bold">Domain</h4>
          </div>
          <FormField
            control={control}
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
                          className="!w-[230px] rounded-[14px] placeholder:text-muted-foreground"
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
            value="font-settings"
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
                form={dappSettingForm}
              />
              <div className="h-3" />
              <FormField
                control={control}
                name="fontOption"
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
                control={control}
                name="colorOption"
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
                    control={control}
                    name={`socialOption.${option.socialName}`}
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
      </form>
    </Form>
  );
}

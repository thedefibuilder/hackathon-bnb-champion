"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "src/components/ui/toggle-group";
import {
  IconArchive,
  IconLayoutGrid,
  IconPhotoHeart,
  IconPokerChip,
  IconWritingSign,
  TablerIcon,
} from "@tabler/icons-react";
import React from "react";
import { TCategoryFilter } from "@/lib/schemas/category-filter";
import { useFormContext } from "react-hook-form";

export type TTemplateFilter = {
  text: string;
  icon: TablerIcon;
};

const filterOptions: TTemplateFilter[] = [
  {
    text: "Show All",
    icon: IconLayoutGrid,
  },
  {
    text: "Token Landing Page",
    icon: IconPokerChip,
  },
  {
    text: "NFT Collection Page",
    icon: IconPhotoHeart,
  },
  {
    text: "DAO Voting dApp",
    icon: IconArchive,
  },
  {
    text: "Web3 Blogging",
    icon: IconWritingSign,
  },
];

export default function CategoryTemplateFilter() {
  const pathname = usePathname();
  const { setValue, watch } = useFormContext<TCategoryFilter>();

  const selectedCategory = watch("category");

  useEffect(() => {
    if (!selectedCategory) {
      setValue("category", "Show All");
    }
  }, [selectedCategory, setValue]);

  const filteredOptions =
    pathname === "/manage/upload"
      ? filterOptions.filter((option) => option.text !== "Show All")
      : filterOptions;

  return (
    <ToggleGroup
      type="single"
      className="flex items-center justify-start gap-2"
      value={selectedCategory}
      onValueChange={(value: string) => {
        if (value) {
          setValue("category", value);
        }
      }}
    >
      {filteredOptions.map((filterItem, index) => (
        <ToggleGroupItem
          key={index}
          value={filterItem.text}
          aria-label={filterItem.text}
          className="flex items-center justify-center gap-1 border border-primary-light px-2 text-xs text-primary-light lg:h-8 lg:py-6 md:truncate"
        >
          {React.createElement(filterItem.icon, { className: "lg:mr-2" })}
          {filterItem.text}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

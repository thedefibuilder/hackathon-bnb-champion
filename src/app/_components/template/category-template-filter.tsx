"use client";
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
import {TCategoryFilter} from "@/lib/schemas/category-filter";
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

  const filteredOptions =
    pathname === "/manage/upload"
      ? filterOptions.filter((option) => option.text !== "Show All")
      : filterOptions;

  return (
    <ToggleGroup
      type="single"
      className="flex items-center justify-between"
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
          className="flex h-8 items-center justify-center border border-primary-light px-2 py-6 text-primary-light"
        >
          {React.createElement(filterItem.icon, { className: "mr-2" })}
          {filterItem.text}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

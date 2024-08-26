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
  return (
    <ToggleGroup type="single" className="flex items-center justify-between">
      {filterOptions.map((filterItem, index) => {
        return (
          <ToggleGroupItem
            key={index}
            value={filterItem.text}
            aria-label="Large"
            className="flex h-8 items-center justify-center border border-primary-light px-2 py-6 text-primary-light"
          >
            {React.createElement(filterItem.icon, { className: "mr-2" })}

            {filterItem.text}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}

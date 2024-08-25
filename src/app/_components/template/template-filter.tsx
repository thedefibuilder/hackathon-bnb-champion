import { Col, Row } from "src/components/common/grid";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "src/components/ui/toggle-group";
import {
  IconArchive,
  IconLayoutGrid,
  IconPhotoHeart,
  IconPokerChip,
  IconWritingSign,
  TablerIcon,
} from "@tabler/icons-react";
import { Sparkle } from "lucide-react";
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

export default function TemplateFilter() {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="flex w-full items-center gap-3">
            <div className="w-full">
              <Input
                placeholder="e.g. I want to build a dApp to trade Stable Coins"
                className="!w-full rounded-[14px] border-primary placeholder:text-muted-foreground"
                icon={<Sparkle className="text-primary" />}
              />
            </div>
            <Button>Search Template</Button>
          </div>
        </Col>
      </Row>
      <div className="h-6" />
      <ToggleGroup type="single" className="flex items-center justify-between">
        {filterOptions.map((filterItem, index) => {
          return (
            <ToggleGroupItem
              key={index}
              value={filterItem.text}
              aria-label="Large"
              className="flex h-8 items-center justify-center border border-[#9546b2] px-2 py-6 text-[#9546b2]"
            >
              {React.createElement(filterItem.icon, { className: "mr-2" })}

              {filterItem.text}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </>
  );
}

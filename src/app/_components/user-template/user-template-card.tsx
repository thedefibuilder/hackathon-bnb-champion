import ShineBorder from "@/components/magicui/shine-border";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconWritingSign, TablerIcon } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

type TUserTemplateCardProps = {
  item: {
    id: string;
    title: string;
    icon: TablerIcon;
    author: string;
    avatar: string;
    image: string;
    category: string;
    lastEdit: string;
    isPublish: boolean;
  };
};

export default function UserTemplateCard({ item }: TUserTemplateCardProps) {
  const { title, icon, author, avatar, image, lastEdit, isPublish } = item;

  return (
    <ShineBorder
      className="w-full justify-start !rounded-[16px] rounded border bg-transparent shadow-xl"
      color={["#4BCE48", "#97f294", "#FFBE7B"]}
    >
      <div className="flex items-center gap-3 rounded-t-[16px] bg-background px-4 py-2">
        {React.createElement(icon, {
          className: "text-primary h-10 h-10",
        })}
        <p className="text-3xl">{title}</p>
      </div>
      <div className="h-4" />
      <div className="flex items-center justify-between px-4">
        <p className="font-bold text-primary">
          Last edit: <span>{lastEdit}</span>
        </p>
        {isPublish ? (
          <div className="flex items-center gap-3 rounded-full bg-primary px-2 py-1 text-black">
            <div className="h-3 w-3 rounded-full bg-secondary-dark"></div>
            <p>Published</p>
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-full bg-secondary px-2 py-1 text-black">
            <div className="h-3 w-3 rounded-full bg-secondary-dark"></div>
            <p>Unpublished</p>
          </div>
        )}
      </div>
      <div className="h-4" />

      <div className="relative w-full">
        <Image
          src={image}
          alt="NFTB.png"
          width={400}
          height={400}
          className="rounded-t-[16px] px-4"
        />
      </div>
      <div className="h-6" />
      <div className="flex items-center justify-between px-4 text-[16px] font-bold text-[#989898]">
        <div>
          <p>Bought on:</p>
          <div className="h-1" />
          <p>{lastEdit}</p>
        </div>
        <div className="h-12 w-[1px] bg-[#989898]" />
        <div>
          <p>Created by:</p>
          <div className="h-1" />
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              by <span className="font-bold">{author}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-6" />
    </ShineBorder>
  );
}

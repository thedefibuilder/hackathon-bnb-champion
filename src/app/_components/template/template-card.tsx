import React from "react";
import Image from "next/image";
import { IconEye, IconStar } from "@tabler/icons-react";
import Link from "next/link";

type TTemplateCardProps = {
  item: {
    id: string;
    name: string;
    author: string;
    image: string;
    livePreview: string;
    rating: number;
    price: number;
    category: string;
  };
};

export default function TemplateCard({ item }: TTemplateCardProps) {
  const { name, author, image, livePreview, rating, price } = item;

  return (
    <div className="relative mb-10 rounded-[16px] border border-primary">
      <div className="absolute left-4 top-6 flex w-full items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-[#FAFAFA] px-4 py-2 text-xl">
          <IconStar
            stroke={2}
            className="h-6 w-6 fill-current text-secondary"
          />
          <p className="font-bold text-primary">{rating}</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#FAFAFA] px-4 py-2 text-xl">
          <IconEye stroke={2} className="h-6 w-6 text-primary" />
          <Link
            target="_blank"
            className="font-bold text-primary"
            href={livePreview}
          >
            Live preview
          </Link>
        </div>
      </div>
      <Image
        src={image}
        alt={name}
        width={460}
        height={466}
        className="h-[340px] w-full rounded-t-[16px]"
      />
      <div className="relative rounded-b-[16px] bg-[#1d0f28] p-4">
        <div className="absolute bottom-10 right-8 flex h-24 w-24 flex-col items-center justify-center rounded-[8px] bg-[#9546b2]">
          <p className="text-4xl">
            <span>$</span>
            {price}
          </p>
          <p className="text-lg uppercase">buy</p>
        </div>
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-lg">{author}</p>
      </div>
    </div>
  );
}

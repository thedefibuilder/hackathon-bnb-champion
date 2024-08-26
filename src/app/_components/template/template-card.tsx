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
    <div className="relative mb-10 rounded-[16px] border">
      <div className="relative">
        <div className="absolute left-4 top-6 z-10 flex w-full items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-primary bg-[#FAFAFA] px-3 py-1 text-xl">
            <IconStar
              stroke={2}
              className="h-4 w-4 fill-current text-secondary"
            />
            <p className="text-[14px] font-bold text-primary">{rating}</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary bg-[#FAFAFA] px-3 py-1 text-xl">
            <IconEye stroke={2} className="h-4 w-4 text-primary" />
            <Link
              target="_blank"
              className="text-[14px] font-bold text-primary"
              href={livePreview}
            >
              Live preview
            </Link>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="rounded-t-[16px]"
          />
        </div>
      </div>

      <div className="relative rounded-b-[16px] bg-background p-4">
        <div className="absolute bottom-14 right-6 flex h-20 w-20 flex-col items-center justify-center rounded-[8px] bg-primary p-2">
          <p className="text-2xl">
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

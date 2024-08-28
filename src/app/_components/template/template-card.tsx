"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { IconEye, IconStar } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useBuyTemplate from "@/lib/hooks/use-buy-template";
import { bscTestnet } from "viem/chains";
import { bnbChainTestnet } from "@/lib/types/chain";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

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
  const { toast } = useToast();
  const { buyTemplate, txHash } = useBuyTemplate(
    bnbChainTestnet,
    `gpress-${item.id}`,
  );
  const { name, author, image, livePreview, rating, price } = item;

  useEffect(() => {
    if (txHash) {
      toast({
        title: "Transaction sent",
        description: "The transaction to buy the template was sent",
        action: (
          <ToastAction altText={"View on Explorer"}>
            <Link
              href={`https://testnet.bscscan.com/tx/${txHash}`}
              target="_blank"
            />
          </ToastAction>
        ),
      });
    }
  }, [txHash]);

  return (
    <div className="relative mb-10 rounded-[16px] border">
      <div className="relative">
        <div className="absolute left-2 top-2 z-10 flex w-full items-center gap-1">
          <div className="flex items-center gap-2 rounded-full border border-primary bg-[#FAFAFA] px-2 px-3 py-1">
            <IconStar
              stroke={2}
              className="h-4 w-4 fill-current text-secondary"
            />
            <p className="text-[14px] font-bold text-primary md:truncate">
              {rating}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-primary bg-[#FAFAFA] px-2 py-1">
            <IconEye stroke={2} className="h-4 w-4 text-primary" />
            <Link
              target="_blank"
              className="text-[14px] text-primary md:truncate"
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
            className="rounded-t-[16px] lg:w-full"
          />
        </div>
      </div>

      <div className="relative rounded-b-[16px] bg-background p-4">
        <Button
          onClick={buyTemplate}
          className="absolute -top-8 right-4 flex h-16 w-16 flex-col items-center justify-center rounded-[8px] bg-primary p-2"
          type="button"
        >
          <p className="text-xl">
            <span>$</span>
            {price}
          </p>
          <p className="text-lg uppercase">buy</p>
        </Button>
        <h2 className="font-bold lg:text-3xl">{name}</h2>
        <p className="lg:text-lg">{author}</p>
      </div>
    </div>
  );
}

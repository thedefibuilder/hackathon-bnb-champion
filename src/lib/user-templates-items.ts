import {
  IconPhotoHeart,
  IconPokerChip,
  IconWritingSign,
  TablerIcon,
} from "@tabler/icons-react";
import { UserTemplatesName } from "./items";

export type TUserTemplateItem = {
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

const NftA: TUserTemplateItem = {
  id: "nft-c",
  title: "My Nft",
  icon: IconPhotoHeart,
  author: "by Oanca Roland",
  avatar: "https://github.com/shadcn.png",
  image: "/nft-c-thumbnail.png",
  category: "nft",
  lastEdit: "August 21, 2024",
  isPublish: true,
};

const DaoToken: TUserTemplateItem = {
  id: "dao-token",
  title: "My DaoToken",
  icon: IconPhotoHeart,
  author: "by Oanca Roland",
  avatar: "https://github.com/shadcn.png",
  image: "/dao-thumbnail.png",
  category: "dao",
  lastEdit: "August 21, 2024",
  isPublish: true,
};

const TokenA: TUserTemplateItem = {
  id: "token-b",
  title: "My Token",
  icon: IconPokerChip,
  author: "by Alex",
  avatar: "https://github.com/shadcn.png",
  image: "/token-b-thumbnail.png",
  category: "token",
  lastEdit: "August 6, 2024",
  isPublish: false,
};

const BlogB: TUserTemplateItem = {
  id: "blog",
  title: "My Blog",
  icon: IconWritingSign,
  author: "by Myspace Tom ",
  avatar: "https://github.com/shadcn.png",
  image: "/blog-thumbnail.png",
  category: "blog",
  lastEdit: "August 21, 2024",
  isPublish: false,
};

const NftB: TUserTemplateItem = {
  id: "nft-b",
  title: "My Nft",
  icon: IconPhotoHeart,
  author: "by Oanca Roland",
  avatar: "https://github.com/shadcn.png",
  image: "/NFTB.png",
  category: "nft",
  lastEdit: "August 21, 2024",
  isPublish: true,
};

const TokenB: TUserTemplateItem = {
  id: "token-c",
  title: "My Token",
  icon: IconPokerChip,
  author: "by Alex",
  avatar: "https://github.com/shadcn.png",
  image: "/token-c-thumbnail.png",
  category: "token",
  lastEdit: "August 6, 2024",
  isPublish: false,
};

const userTemplateItemsMap: Record<UserTemplatesName, TUserTemplateItem> = {
  [UserTemplatesName.DaoToken]: DaoToken,
  [UserTemplatesName.NftA]: NftA,
  [UserTemplatesName.TokenA]: TokenA,
  [UserTemplatesName.BlogB]: BlogB,
  [UserTemplatesName.NftB]: NftB,
  [UserTemplatesName.TokenB]: TokenB,
};

export type TTemplatesForm = Record<string, TUserTemplateItem | undefined>;

export { userTemplateItemsMap, NftA, TokenA, BlogB, NftB, TokenB };

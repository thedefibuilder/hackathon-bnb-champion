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

const BlogA: TUserTemplateItem = {
  id: "user-template-a",
  title: "My Blog",
  icon: IconWritingSign,
  author: "by Myspace Tom ",
  avatar: "https://github.com/shadcn.png",
  image: "/placeholder.png",
  category: "blog",
  lastEdit: "August 21, 2024",
  isPublish: false,
};

const NftA: TUserTemplateItem = {
  id: "user-template-b",
  title: "My Nft",
  icon: IconPhotoHeart,
  author: "by Oanca Roland",
  avatar: "https://github.com/shadcn.png",
  image: "/placeholder.png",
  category: "nft",
  lastEdit: "August 21, 2024",
  isPublish: true,
};

const TokenA: TUserTemplateItem = {
  id: "user-template-b",
  title: "My Token",
  icon: IconPokerChip,
  author: "by Alex",
  avatar: "https://github.com/shadcn.png",
  image: "/placeholder.png",
  category: "token",
  lastEdit: "August 6, 2024",
  isPublish: false,
};

const BlogB: TUserTemplateItem = {
  id: "user-template-a",
  title: "My Blog",
  icon: IconWritingSign,
  author: "by Myspace Tom ",
  avatar: "https://github.com/shadcn.png",
  image: "/placeholder.png",
  category: "blog",
  lastEdit: "August 21, 2024",
  isPublish: false,
};

const NftB: TUserTemplateItem = {
  id: "user-template-b",
  title: "My Nft",
  icon: IconPhotoHeart,
  author: "by Oanca Roland",
  avatar: "https://github.com/shadcn.png",
  image: "/placeholder.png",
  category: "nft",
  lastEdit: "August 21, 2024",
  isPublish: true,
};

const TokenB: TUserTemplateItem = {
  id: "user-template-b",
  title: "My Token",
  icon: IconPokerChip,
  author: "by Alex",
  avatar: "https://github.com/shadcn.png",
  image: "/placeholder.png",
  category: "token",
  lastEdit: "August 6, 2024",
  isPublish: false,
};

const userTemplateItemsMap: Record<UserTemplatesName, TUserTemplateItem> = {
  [UserTemplatesName.BlogA]: BlogA,
  [UserTemplatesName.NftA]: NftA,
  [UserTemplatesName.TokenA]: TokenA,
  [UserTemplatesName.BlogB]: BlogB,
  [UserTemplatesName.NftB]: NftB,
  [UserTemplatesName.TokenB]: TokenB,
};

export type TTemplatesForm = Record<string, TUserTemplateItem | undefined>;

export { userTemplateItemsMap, BlogA, NftA, TokenA, BlogB, NftB, TokenB };

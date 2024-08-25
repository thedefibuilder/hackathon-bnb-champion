import { TemplatesName } from "./items";

type TTemplateItem = {
  id: string;
  name: string;
  author: string;
  image: string;
  livePreview: string;
  rating: number;
  price: number;
  category: string;
};

const nftA: TTemplateItem = {
  id: "nft-a",
  name: "Nft A",
  author: "by Myspace Tom ",
  image: "/nft-a.png",
  livePreview: "/preview/nft-a",
  rating: 3.5,
  price: 60,
  category: "nft",
};

const nftB: TTemplateItem = {
  id: "nft-b",
  name: "Nft B",
  author: "by Roland  Oanca",
  image: "/nft-b.png",
  livePreview: "/preview/nft-b",
  rating: 4.5,
  price: 80,
  category: "nft",
};

const nftC: TTemplateItem = {
  id: "nft-c",
  name: "Nft C",
  author: "by Alex",
  image: "/nft-c.png",
  livePreview: "/preview/nft-c",
  rating: 5,
  price: 100,
  category: "nft",
};

const tokenA: TTemplateItem = {
  id: "token-a",
  name: "Token A",
  author: "by Alex",
  image: "/token-a.png",
  livePreview: "/preview/token-a",
  rating: 4,
  price: 50,
  category: "token",
};

const tokenB: TTemplateItem = {
  id: "token-b",
  name: "Token B",
  author: "by Roland",
  image: "/token-b.png",
  livePreview: "/preview/token-b",
  rating: 4,
  price: 70,
  category: "token",
};

const tokenC: TTemplateItem = {
  id: "token-c",
  name: "Token C",
  author: "by Alex",
  image: "/token-c.png",
  livePreview: "/preview/token-c",
  rating: 3.5,
  price: 60,
  category: "token",
};

const daoToken: TTemplateItem = {
  id: "dao-token",
  name: "Dao Token",
  author: "by Roland",
  image: "/dao-token.png",
  livePreview: "/preview/token-c",
  rating: 3.5,
  price: 60,
  category: "dao",
};

const templateItemsMap: Record<TemplatesName, TTemplateItem> = {
  [TemplatesName.nftA]: nftA,
  [TemplatesName.nftB]: nftB,
  [TemplatesName.nftC]: nftC,
  [TemplatesName.tokenA]: tokenA,
  [TemplatesName.tokenB]: tokenB,
  [TemplatesName.tokenC]: tokenC,
  [TemplatesName.daoToken]: daoToken,
};

export type TTemplatesForm = Record<string, TTemplateItem | undefined>;

export { templateItemsMap, nftA, nftB, nftC, tokenA, tokenB, tokenC };

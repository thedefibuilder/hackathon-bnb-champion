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
  image: "/nft1.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/nft-asd/index.html",
  rating: 4.5,
  price: 60,
  category: "nft",
};

const nftB: TTemplateItem = {
  id: "nft-b",
  name: "Nft B",
  author: "by Roland  Oanca",
  image: "/NFTB.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/nft-b/index.html",
  rating: 4.5,
  price: 80,
  category: "nft",
};

const nftC: TTemplateItem = {
  id: "nft-c",
  name: "Nft C",
  author: "by Alex",
  image: "/nft-c-thumbnail.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/nft-c/index.html",
  rating: 5,
  price: 100,
  category: "nft",
};

const tokenA: TTemplateItem = {
  id: "token-a",
  name: "Token A",
  author: "by Alex",
  image: "/token-a-thumbnail.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/token-a/index.html",
  rating: 4,
  price: 50,
  category: "token",
};

const tokenB: TTemplateItem = {
  id: "token-b",
  name: "Token B",
  author: "by Roland",
  image: "/token-b-thumbnail.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/token-b/index.html",
  rating: 4,
  price: 70,
  category: "token",
};

const tokenC: TTemplateItem = {
  id: "token-c",
  name: "Token C",
  author: "by Alex",
  image: "/token-c-thumbnail.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/token-c/index.html",
  rating: 4.2,
  price: 60,
  category: "token",
};

const daoToken: TTemplateItem = {
  id: "dao-token",
  name: "Dao Token",
  author: "by Roland",
  image: "/dao-thumbnail.png",
  livePreview:
    "https://gnfd-testnet-sp3.nodereal.io/view/barabula-website-test/dao/index.html",
  rating: 4.3,
  price: 60,
  category: "dao",
};

const blog: TTemplateItem = {
  id: "blog",
  name: "Blog",
  author: "by Roland",
  image: "/blog-thumbnail.png",
  livePreview: `/manage/blog`,
  rating: 4.3,
  price: 60,
  category: "blog",
};

const templateItemsMap: Record<TemplatesName, TTemplateItem> = {
  [TemplatesName.nftA]: nftA,
  [TemplatesName.nftB]: nftB,
  [TemplatesName.nftC]: nftC,
  [TemplatesName.tokenA]: tokenA,
  [TemplatesName.tokenB]: tokenB,
  [TemplatesName.tokenC]: tokenC,
  [TemplatesName.daoToken]: daoToken,
  [TemplatesName.blog]: blog,
};

export type TTemplatesForm = Record<string, TTemplateItem | undefined>;

export { templateItemsMap, nftA, nftB, nftC, tokenA, tokenB, tokenC, blog };

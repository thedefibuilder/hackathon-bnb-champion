import TokenA from "@/templates/token/token-a";
import { CustomizableTemplatesName } from "./items";
import TokenB from "@/templates/token/token-b";
import TokenC from "@/templates/token/token-c";
import NftC from "@/templates/nft/nft-c";
import DaoToken from "@/templates/dao-token/dao-token";
import NftA from "@/templates/nft/nft-a";
import NftB from "@/templates/nft/nft-b";

export interface IdProps {
  id?: string;
}
export type TCustomizableItem =
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.tokenA;
    }
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.tokenB;
    }
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.tokenC;
    }
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.nftA;
    }
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.nftB;
    }
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.nftC;
    }
  | {
      id: string;
      component: JSX.Element;
      itemName: CustomizableTemplatesName.daoToken;
    };

const tokenA: TCustomizableItem = {
  id: "token-a",
  component: <TokenA />,
  itemName: CustomizableTemplatesName.tokenA,
};

const tokenB: TCustomizableItem = {
  id: "token-b",
  component: <TokenB />,
  itemName: CustomizableTemplatesName.tokenB,
};

const tokenC: TCustomizableItem = {
  id: "token-c",
  component: <TokenC />,
  itemName: CustomizableTemplatesName.tokenC,
};

const nftA: TCustomizableItem = {
  id: "nft-a",
  component: <NftA />,
  itemName: CustomizableTemplatesName.nftA,
};

const nftB: TCustomizableItem = {
  id: "nft-b",
  component: <NftB />,
  itemName: CustomizableTemplatesName.nftB,
};

const nftC: TCustomizableItem = {
  id: "nft-c",
  component: <NftC />,
  itemName: CustomizableTemplatesName.nftC,
};

const daoToken: TCustomizableItem = {
  id: "dao-token",
  component: <DaoToken />,
  itemName: CustomizableTemplatesName.daoToken,
};

const customizableItemsMap: Record<
  CustomizableTemplatesName,
  TCustomizableItem
> = {
  [CustomizableTemplatesName.tokenA]: tokenA,
  [CustomizableTemplatesName.tokenB]: tokenB,
  [CustomizableTemplatesName.tokenC]: tokenC,
  [CustomizableTemplatesName.nftA]: nftA,
  [CustomizableTemplatesName.nftB]: nftB,
  [CustomizableTemplatesName.nftC]: nftC,
  [CustomizableTemplatesName.daoToken]: daoToken,
};

export type TCustomizableForm = Record<string, TCustomizableItem | undefined>;

export {
  customizableItemsMap,
  tokenA,
  tokenB,
  tokenC,
  nftA,
  nftB,
  nftC,
  daoToken,
};

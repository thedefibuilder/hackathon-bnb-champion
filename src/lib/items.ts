export enum EItemName {
  button = "button",
  heading = "heading",
  image = "image",
  textEditor = "textEditor",
  container = "container",
  grid = "grid",
  dropArea = "dropArea",
}

export enum TemplatesName {
  nftA = "nft-a",
  nftB = "nft-b",
  nftC = "nft-c",
  tokenA = "token-a",
  tokenB = "token-b",
  tokenC = "token-c",
  daoToken = "dao-token",
}

export const itemBlockNames = Object.values(EItemName) as [
  EItemName,
  ...EItemName[],
];
export const itemTemplateNames = Object.values(TemplatesName) as [
  TemplatesName,
  ...TemplatesName[],
];

export function generateRandomId(length = 10) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";

  for (let i = 0; i < length; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return id;
}

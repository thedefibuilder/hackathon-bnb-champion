export enum EItemName {
  button = "button",
  heading = "heading",
  image = "image",
  textEditor = "textEditor",
  container = "container",
  grid = "grid",
  dropArea = "dropArea",
}

export const itemNames = Object.values(EItemName) as [
  EItemName,
  ...EItemName[],
];

export function generateRandomId(length = 10) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";

  for (let i = 0; i < length; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return id;
}

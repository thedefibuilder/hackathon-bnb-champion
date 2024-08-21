export enum EWidgetName {
  button = "button",
  heading = "heading",
  image = "image",
  textEditor = "textEditor",
  container = "container",
  grid = "grid",
  dropArea = "dropArea",
}

export function generateRandomId() {
  return Math.random().toString(36);
}

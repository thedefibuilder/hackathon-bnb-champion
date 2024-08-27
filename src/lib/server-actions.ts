import { env } from "@/env";

export type TFontItem = {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: Record<string, string>;
  kind: string;
  value?: string;
  label?: string;
};

export async function fetchGoogleFonts(): Promise<TFontItem[]> {
  const GOOGLE_FONTS_API = `https://www.googleapis.com/webfonts/v1/webfonts?key=${env.FONTS_KEY}`;

  try {
    const response = await fetch(GOOGLE_FONTS_API);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: unknown = await response.json();

    if (
      data &&
      typeof data === "object" &&
      "items" in data &&
      Array.isArray(data.items)
    ) {
      return data.items as TFontItem[];
    } else {
      throw new Error("Invalid response data shape");
    }
  } catch (error) {
    console.error("Error fetching Google Fonts:", error);
    return [];
  }
}

export async function fetchBnbRate(): Promise<number | null> {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd",
    );
    const data = await response.json();
    const rate = data.binancecoin.usd;
    return rate;
  } catch (error) {
    console.error("Error fetching BNB rate", error);
    return 550;
  }
}

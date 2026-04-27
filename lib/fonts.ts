import { Playfair_Display, DM_Sans, Cormorant } from "next/font/google";

export const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const cormorant = Cormorant({
  variable: "--font-accent",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

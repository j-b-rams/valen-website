import type { Metadata } from "next";
import { silkscreen, pressStart, jakarta } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "valen",
  description: "personal space of valen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${silkscreen.variable} ${pressStart.variable} ${jakarta.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

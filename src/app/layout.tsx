import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import { inter, josefin_sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahad Munir — Senior Software Developer — Backend",
  description:
    "A software developer based in Lahore, Pakistan, specializes JavaScript, Python, and the Cloud (AWS)"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${josefin_sans.variable}`}>
      <GoogleTagManager gtmId="G-CBCG8T24WL" />
      <body>{children}</body>
    </html>
  );
}

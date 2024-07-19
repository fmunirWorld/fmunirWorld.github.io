import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import { inter, josefin_sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahad Munir — Senior Software Developer — Backend",
  description:
    "Top-tier software development talent, proficient in JavaScript/TypeScript, Python, and cloud technologies, delivers web applications, scalable backend systems, and data-driven solutions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${josefin_sans.variable}`}>
      <GoogleTagManager gtmId="GTM-MXNVVX4P" />
      <body>{children}</body>
    </html>
  );
}

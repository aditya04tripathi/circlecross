import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { seoDefaults } from "../content/seo";
import "./globals.css";

const geist = localFont({
  src: "../public/fonts/geist.woff",
  variable: "--font-geist",
  display: "swap",
});

const siteUrl = new URL(process.env.SITE_URL ?? "http://localhost:3011");
if (!["http:", "https:"].includes(siteUrl.protocol)) {
  throw new Error("SITE_URL must be an HTTP(S) URL");
}

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: seoDefaults.siteName,
    template: seoDefaults.titleTemplate,
  },
  description: seoDefaults.defaultDescription,
};

export const viewport: Viewport = { themeColor: "#f4f1e9" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
	src: "../public/fonts/geist.woff",
	variable: "--font-geist",
	display: "swap",
});
const siteUrl = new URL(process.env.SITE_URL ?? "http://localhost:3011");
if (!["http:", "https:"].includes(siteUrl.protocol))
	throw new Error("SITE_URL must be an HTTP(S) URL");
export const metadata: Metadata = {
	metadataBase: siteUrl,
	title: "CircleCross — Life happens where circles cross.",
	description:
		"A little closer to your people. Discover CircleCross Go, Uni and Pro: meaningful connections for every chapter of your life.",
	openGraph: {
		title: "CircleCross — Life happens where circles cross.",
		description: "Your world is full of people you haven’t met yet.",
		type: "website",
		images: [
			{
				url: "/images/together.jpg",
				width: 1400,
				height: 933,
				alt: "Friends spending time together outdoors",
			},
		],
	},
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

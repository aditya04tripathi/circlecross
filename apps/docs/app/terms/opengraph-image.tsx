import { createOgImage, ogContentType, ogSize } from "../../lib/og-image";

export const alt = "Website terms";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("/terms");
}

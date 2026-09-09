import { createOgImage, ogContentType, ogSize } from "../lib/og-image";

export const alt = "CircleCross";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage("/");
}

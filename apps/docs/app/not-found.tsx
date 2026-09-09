import type { Metadata } from "next";
import { RecoveryPage } from "../components/recovery-page";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <RecoveryPage kind="notFound" />;
}

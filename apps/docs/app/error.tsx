"use client";

import { RecoveryPage } from "../components/recovery-page";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  void error;
  return <RecoveryPage kind="error" />;
}

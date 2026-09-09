import { Button } from "@circlecross/ui/components/button";
import type { ReactNode } from "react";
import { Navigation } from "./navigation";
import { ghostReset } from "./styles";

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <>
      <Button
        nativeButton={false}
        variant="ghost"
        render={
          <a
            className="fixed top-[-80px] left-4 z-40 bg-ink px-5 py-3.5 text-white focus:top-[15px]"
            href="#main"
          />
        }
        className={ghostReset}
      >
        Skip to content
      </Button>
      <Navigation />
      {children}
    </>
  );
}

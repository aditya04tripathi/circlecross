import { Button } from "@circlecross/ui/components/button";
import { cn } from "cn";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { SiteButton } from "./site-button";
import { buttonIcon, siteCta, siteCtaLight, textLink } from "./styles";

export function Arrow({ diagonal = false, className }: { diagonal?: boolean; className?: string }) {
  const Icon = diagonal ? ArrowUpRightIcon : ArrowRightIcon;
  return <Icon aria-hidden="true" className={cn("block size-[1em]", className)} />;
}

export function LinkButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <SiteButton variant="primary" href={href} light={light}>
      {children}
    </SiteButton>
  );
}

export function TextLink({
  href,
  children,
  onClick,
  className,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <SiteButton variant="link" href={href} onClick={onClick} className={className}>
      {children}
    </SiteButton>
  );
}

export { Button, buttonIcon, siteCta, siteCtaLight, textLink };

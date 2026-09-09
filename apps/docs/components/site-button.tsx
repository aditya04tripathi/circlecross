"use client";

import { Button } from "@circlecross/ui/components/button";
import { cn } from "cn";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { buttonIcon, ghostReset, siteCta, siteCtaLight, textLink } from "./styles";
import { Arrow } from "./ui";

type SiteButtonVariant = "primary" | "secondary" | "link";

type SiteButtonProps = {
  variant?: SiteButtonVariant;
  href?: string;
  light?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
  "aria-current"?: ComponentProps<"a">["aria-current"];
};

export function SiteButton({
  variant = "primary",
  href,
  light = false,
  children,
  className,
  type = "button",
  onClick,
  ...rest
}: SiteButtonProps) {
  const anchorClick = onClick as MouseEventHandler<HTMLAnchorElement> | undefined;
  const buttonClick = onClick as ComponentProps<typeof Button>["onClick"];

  if (variant === "primary") {
    if (href) {
      return (
        <Button
          nativeButton={false}
          render={<a href={href} onClick={anchorClick} {...rest} />}
          className={cn(siteCta, light && siteCtaLight, className)}
          size="lg"
        >
          {children}
          <span className={buttonIcon} data-button-icon data-icon="inline-end">
            <Arrow diagonal />
          </span>
        </Button>
      );
    }
    return (
      <Button
        type={type}
        onClick={buttonClick}
        className={cn(siteCta, light && siteCtaLight, className)}
        size="lg"
        {...rest}
      >
        {children}
        <span className={buttonIcon} data-button-icon data-icon="inline-end">
          <Arrow diagonal />
        </span>
      </Button>
    );
  }

  if (variant === "link") {
    if (href) {
      return (
        <Button
          nativeButton={false}
          variant="link"
          render={<a href={href} onClick={anchorClick} {...rest} />}
          className={cn(textLink, className)}
        >
          {children}
        </Button>
      );
    }
    return (
      <Button variant="link" onClick={buttonClick} className={cn(textLink, className)} {...rest}>
        {children}
      </Button>
    );
  }

  if (href) {
    return (
      <Button
        nativeButton={false}
        variant="ghost"
        render={<a href={href} onClick={anchorClick} {...rest} />}
        className={cn(ghostReset, className)}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      type={type}
      variant="ghost"
      onClick={buttonClick}
      className={cn(ghostReset, className)}
      {...rest}
    >
      {children}
    </Button>
  );
}

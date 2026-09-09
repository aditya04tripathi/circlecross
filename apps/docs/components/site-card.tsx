import { cn } from "cn";
import type { ReactNode } from "react";

type SiteCardProps = {
  eyebrow?: string;
  title: string;
  body: string;
  features?: string[];
  example?: string;
  media?: ReactNode;
  icon?: ReactNode;
  cta?: ReactNode;
  className?: string;
  tone?: "chapter" | "principle";
  as?: "article" | "div";
};

export function SiteCard({
  eyebrow,
  title,
  body,
  features,
  example,
  media,
  icon,
  cta,
  className,
  tone = "chapter",
  as: Tag = "article",
}: SiteCardProps) {
  const isPrinciple = tone === "principle";

  return (
    <Tag
      className={cn(
        "min-w-0",
        isPrinciple && "border-t border-line pt-[25px] max-md:grid max-md:grid-cols-[45px_1fr] max-md:gap-x-5",
        className,
      )}
    >
      {icon ? (
        <span
          className={cn(
            "flex h-[30px] items-center",
            isPrinciple ? "max-md:row-span-2 max-md:mt-[3px]" : "mb-4",
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      {eyebrow ? (
        <p className="mb-3 text-[10px] font-[550] tracking-[0.1em] text-soft uppercase">{eyebrow}</p>
      ) : null}
      <h3
        className={cn(
          isPrinciple
            ? "my-[25px] max-w-[250px] text-lg font-[450] tracking-[-0.03em] max-md:my-0 max-md:mb-3 max-md:max-w-none max-md:text-[17px]"
            : "max-w-[380px] text-[44px] leading-[1.15] tracking-[-0.055em] max-[1100px]:text-[36px] max-md:max-w-[300px] max-md:text-[34px]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-soft",
          isPrinciple
            ? "max-w-[300px] text-xs leading-[1.9] max-md:col-start-2 max-md:max-w-none"
            : "mt-6 max-w-[370px] text-sm leading-[1.8] max-md:mt-4 max-md:text-xs",
        )}
      >
        {body}
      </p>
      {features && features.length > 0 ? (
        <ul className="my-[30px] flex flex-wrap gap-x-3 gap-y-1 text-[10px] max-md:my-5 max-md:text-[9px]">
          {features.map((feature) => (
            <li key={feature} className="after:ml-3 after:content-['·'] last:after:content-none">
              {feature}
            </li>
          ))}
        </ul>
      ) : null}
      {example ? (
        <p
          className={cn(
            "mt-4 text-xs leading-[1.7] text-soft/90",
            isPrinciple ? "max-w-[300px] max-md:col-start-2 max-md:max-w-none" : "max-w-[370px]",
          )}
        >
          <span className="font-[550] text-ink">For example: </span>
          {example}
        </p>
      ) : null}
      {cta ? <div className={cn(isPrinciple && "max-md:col-start-2", "mt-6")}>{cta}</div> : null}
      {media ? <div className="mt-6">{media}</div> : null}
    </Tag>
  );
}

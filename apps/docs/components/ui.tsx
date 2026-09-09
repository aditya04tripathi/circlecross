import type { ReactNode } from "react";
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 30" fill="none" aria-hidden="true">
      <circle cx="15" cy="15" r="12" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="29" cy="15" r="12" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
    <a className={`button ${light ? "button-light" : ""}`} href={href}>
      {children}
      <span className="button-icon">
        <Arrow diagonal />
      </span>
    </a>
  );
}

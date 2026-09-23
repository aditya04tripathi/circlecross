import {
  type RecoveryCopy,
  recoveryCopy,
  recoveryHomeLabel,
  recoveryWorldLinks,
} from "../content/recovery";
import { MarketingShell } from "./marketing-shell";
import { SiteButton } from "./site-button";
import { SiteFooter } from "./site-footer";
import { eyebrow, hHero, pageInset, pyStatement } from "./styles";
import { Arrow } from "./ui";

type RecoveryPageProps = {
  kind: "notFound" | "error";
};

export function RecoveryPage({ kind }: RecoveryPageProps) {
  const copy: RecoveryCopy = recoveryCopy[kind];

  return (
    <MarketingShell>
      <meta name="robots" content="noindex, nofollow" />
      <main className={`${pageInset} ${pyStatement} max-w-none pt-24 pb-24 max-md:pt-20`} id="main">
        <div className="mx-auto max-w-[900px]">
          <SiteButton variant="link" href="/">
            <Arrow className="rotate-180" />
            {recoveryHomeLabel}
          </SiteButton>
          <p className={`${eyebrow} mt-14`}>CircleCross</p>
          <h1 className={`${hHero} mb-10 max-w-[16ch] text-[clamp(50px,7vw,90px)]`}>
            {copy.title}
          </h1>
          <p className="max-w-[700px] text-base leading-[1.8] text-soft">{copy.body}</p>
          <ul className="mt-12 flex flex-col gap-5">
            {recoveryWorldLinks.map((link) => (
              <li key={link.href}>
                <SiteButton variant="link" href={link.href}>
                  {link.label}
                  <Arrow diagonal />
                </SiteButton>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </MarketingShell>
  );
}

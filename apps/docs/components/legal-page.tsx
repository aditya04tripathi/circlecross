import type { LegalDoc } from "../content/legal/privacy";
import { SiteButton } from "./site-button";
import { SiteFooter } from "./site-footer";
import { eyebrow, hHero, pageInset, pyStatement } from "./styles";
import { Arrow } from "./ui";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <main className={`${pageInset} ${pyStatement} max-w-none pt-24 pb-24 max-md:pt-20`}>
        <div className="mx-auto max-w-[900px]">
          <SiteButton variant="link" href="/">
            <Arrow className="rotate-180" />
            Back to CircleCross
          </SiteButton>
          <p
            className="mt-10 rounded-sm border border-copper/30 bg-copper/10 px-4 py-3 text-sm leading-[1.6] text-ink"
            role="status"
          >
            {doc.draftBanner}
          </p>
          <p className={`${eyebrow} mt-14`}>{doc.eyebrow}</p>
          <h1 className={`${hHero} mb-10 max-w-[16ch] text-[clamp(50px,7vw,90px)]`}>
            {doc.headline}
          </h1>
          <p className="max-w-[700px] text-base leading-[1.8] text-soft">{doc.intro}</p>
          {doc.sections.map((section) => (
            <section key={section.heading} className="mt-[45px]">
              <h2 className="mb-[15px] text-[25px] tracking-[-0.03em]">{section.heading}</h2>
              <p className="max-w-[700px] text-base leading-[1.8] text-soft">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

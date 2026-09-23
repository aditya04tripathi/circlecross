import { JsonLd } from "../../components/json-ld";
import { MarketingShell } from "../../components/marketing-shell";
import { ProConnectOsGrid } from "../../components/pro/pro-connect-os-grid";
import { ProCta } from "../../components/pro/pro-cta";
import { ProHero } from "../../components/pro/pro-hero";
import { ProInstitutionalTrust } from "../../components/pro/pro-institutional-trust";
import { ProLifespanSection } from "../../components/pro/pro-lifespan-section";
import { ProSignatureProgrammes } from "../../components/pro/pro-signature-programmes";
import { SiteFooter } from "../../components/site-footer";
import { generateSeo, getJsonLd } from "../../content/seo";

export const metadata = generateSeo("/pro");

export default function ProPage() {
  return (
    <MarketingShell>
      <JsonLd data={getJsonLd("/pro")} />
      <main id="main">
        <ProHero />
        <ProConnectOsGrid />
        <ProSignatureProgrammes />
        <ProInstitutionalTrust />
        <ProLifespanSection />
        <ProCta />
      </main>
      <SiteFooter />
    </MarketingShell>
  );
}

import { JsonLd } from "../../components/json-ld";
import { MarketingShell } from "../../components/marketing-shell";
import { SiteFooter } from "../../components/site-footer";
import { ConnectOsGrid } from "../../components/uni/connect-os-grid";
import { FeatureCatalogue } from "../../components/uni/feature-catalogue";
import { InstitutionalTrust } from "../../components/uni/institutional-trust";
import { SignatureProgrammes } from "../../components/uni/signature-programmes";
import { UniBridgeSection } from "../../components/uni/uni-bridge-section";
import { UniCta } from "../../components/uni/uni-cta";
import { UniHero } from "../../components/uni/uni-hero";
import { generateSeo, getJsonLd } from "../../content/seo";

export const metadata = generateSeo("/uni");

export default function UniPage() {
  return (
    <MarketingShell>
      <JsonLd data={getJsonLd("/uni")} />
      <main id="main">
        <UniHero />
        <ConnectOsGrid />
        <SignatureProgrammes />
        <FeatureCatalogue />
        <InstitutionalTrust />
        <UniBridgeSection />
        <UniCta />
      </main>
      <SiteFooter />
    </MarketingShell>
  );
}

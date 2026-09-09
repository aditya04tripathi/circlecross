import { JsonLd } from "../../components/json-ld";
import { MarketingShell } from "../../components/marketing-shell";
import { ProductPageView } from "../../components/product-page";
import { generateSeo, getJsonLd } from "../../content/seo";
import { getWorld } from "../../content/worlds";

const world = getWorld("pro");

export const metadata = generateSeo("/pro");

export default function ProPage() {
  return (
    <MarketingShell>
      <JsonLd data={getJsonLd("/pro")} />
      <ProductPageView world={world} />
    </MarketingShell>
  );
}

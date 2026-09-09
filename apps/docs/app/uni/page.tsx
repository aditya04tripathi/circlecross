import { JsonLd } from "../../components/json-ld";
import { MarketingShell } from "../../components/marketing-shell";
import { ProductPageView } from "../../components/product-page";
import { generateSeo, getJsonLd } from "../../content/seo";
import { getWorld } from "../../content/worlds";

const world = getWorld("uni");

export const metadata = generateSeo("/uni");

export default function UniPage() {
  return (
    <MarketingShell>
      <JsonLd data={getJsonLd("/uni")} />
      <ProductPageView world={world} />
    </MarketingShell>
  );
}

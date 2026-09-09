import { JsonLd } from "../../components/json-ld";
import { MarketingShell } from "../../components/marketing-shell";
import { ProductPageView } from "../../components/product-page";
import { generateSeo, getJsonLd } from "../../content/seo";
import { getWorld } from "../../content/worlds";

const world = getWorld("go");

export const metadata = generateSeo("/go");

export default function GoPage() {
  return (
    <MarketingShell>
      <JsonLd data={getJsonLd("/go")} />
      <ProductPageView world={world} />
    </MarketingShell>
  );
}

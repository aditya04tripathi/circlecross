import { JsonLd } from "../../components/json-ld";
import { LegalPage } from "../../components/legal-page";
import { termsDoc } from "../../content/legal/terms";
import { generateSeo, getJsonLd } from "../../content/seo";

export const metadata = generateSeo("/terms");

export default function Terms() {
  return (
    <>
      <JsonLd data={getJsonLd("/terms")} />
      <LegalPage doc={termsDoc} />
    </>
  );
}

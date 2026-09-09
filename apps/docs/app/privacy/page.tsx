import { JsonLd } from "../../components/json-ld";
import { LegalPage } from "../../components/legal-page";
import { privacyDoc } from "../../content/legal/privacy";
import { generateSeo, getJsonLd } from "../../content/seo";

export const metadata = generateSeo("/privacy");

export default function Privacy() {
  return (
    <>
      <JsonLd data={getJsonLd("/privacy")} />
      <LegalPage doc={privacyDoc} />
    </>
  );
}

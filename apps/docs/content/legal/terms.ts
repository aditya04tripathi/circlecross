import type { LegalDoc } from "./privacy";

export const termsDoc: LegalDoc = {
  slug: "terms",
  title: "Website terms — CircleCross",
  eyebrow: "Website terms",
  headline: "Using this site.",
  draftBanner: "Draft for legal review. This is not a final terms of use agreement.",
  intro:
    "These draft terms describe use of the public CircleCross marketing website. They do not create a product account or waitlist service.",
  sections: [
    {
      heading: "Agreement",
      body: "By browsing this marketing website you agree to these draft terms for the public site. If you do not agree, please do not continue to use the site.",
    },
    {
      heading: "Informational content only",
      body: "Content on this site introduces CircleCross and its planned worlds. It is informational marketing copy. This site does not offer a live account, waitlist signup, or paid service.",
    },
    {
      heading: "Intellectual property",
      body: "The CircleCross name, marks, text, layout, and imagery on this site are owned by CircleCross or used with permission. You may not copy or reuse them for commercial purposes without permission.",
    },
    {
      heading: "Acceptable use",
      body: "Do not use this site to impersonate CircleCross, disrupt delivery, or scrape in a way that harms the site or its visitors. Ordinary browsing and linking for personal or editorial purposes is welcome.",
    },
    {
      heading: "Disclaimer",
      body: "Pre launch marketing content is provided as is. We do not warrant that descriptions of upcoming products will match final shipped features.",
    },
    {
      heading: "Limitation of liability",
      body: "To the extent permitted by law, CircleCross is not liable for indirect or consequential loss arising from use of this static marketing brochure site.",
    },
    {
      heading: "Governing law",
      // TODO: counsel to set governing law jurisdiction
      body: "Governing law and venue will be confirmed by counsel. This placeholder must be replaced before these terms leave draft status.",
    },
    {
      heading: "Contact",
      // TODO: confirm production contact email before launch
      body: "Questions about these draft terms may be sent to hello@circlecross.app.",
    },
  ],
};

export type LegalSection = {
  heading: string;
  body: string;
};

export type LegalDoc = {
  slug: "privacy" | "terms";
  title: string;
  eyebrow: string;
  headline: string;
  draftBanner: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Website privacy — CircleCross",
  eyebrow: "Website privacy",
  headline: "Your visit. Your choice.",
  draftBanner: "Draft for legal review. This is not a final privacy policy.",
  intro:
    "This marketing website lets you explore CircleCross without creating an account. The notice below covers this public site only.",
  sections: [
    {
      heading: "Scope",
      body: "This page applies to the CircleCross marketing website. It does not cover CircleCross Uni, or Pro product accounts, which are not offered on this site today.",
    },
    {
      heading: "What we do not collect on this site",
      body: "We do not ask for your email address through a form on this website, and we do not ask for precise location. Exploring the story, worlds, and principles does not require an account.",
    },
    {
      heading: "World preference cookie",
      body: "If you choose a CircleCross world, your preference is stored in a first party cookie named circlecross-world with the value Uni, or Pro. The cookie uses Path=/, SameSite=Lax, and a one year Max-Age. It is readable by this site's scripts so the marketing pages can reflect your choice. It is not an account cookie and is not HttpOnly. You can remove it by clearing cookies for this site (circlecross.app, or your local host while developing).",
    },
    {
      heading: "Hosting technical logs",
      body: "Your browser requests pages, fonts, and photographs from the website host. Hosting infrastructure may process technical information such as IP addresses and request metadata to deliver and secure the site.",
    },
    {
      heading: "Product privacy",
      body: "CircleCross Uni, and Pro are introduced here as upcoming experiences. Product specific privacy information and consent controls will need to be available before account registration opens. This page does not describe future product data practices beyond that statement.",
    },
    {
      heading: "Contact",
      // TODO: confirm production contact email before launch
      body: "Questions about this draft may be sent to hello@circlecross.app. Replace this address once counsel confirms the production contact.",
    },
    {
      heading: "Changes",
      body: "We may update this draft as the marketing site evolves. The draft banner remains until human legal review approves a final version.",
    },
  ],
};

export type FooterLink = {
  label: string;
  href: string;
  todo?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerBrand = {
  name: "CircleCross",
  tagline: "Good things happen when we cross paths.",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "CircleCross Go", href: "/go" },
      { label: "CircleCross Uni", href: "/uni" },
      { label: "CircleCross Pro", href: "/pro" },
    ],
  },
  {
    title: "Company",
    links: [
      // TODO: confirm production contact email before launch
      {
        label: "hello@circlecross.app",
        href: "mailto:hello@circlecross.app",
        todo: "confirm email",
      },
      { label: "Our principles", href: "/#trust" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

export const navItems: NavItem[] = [
  { label: "The idea", href: "/#idea", sectionId: "idea" },
  { label: "Connections", href: "/#connections", sectionId: "connections" },
  { label: "Our worlds", href: "/#worlds", sectionId: "worlds" },
  { label: "Made for you", href: "/#trust", sectionId: "trust" },
  { label: "Find your circle", href: "/#start", sectionId: "start" },
];

export const primaryNav = navItems.filter((item) =>
  ["idea", "worlds", "trust"].includes(item.sectionId ?? ""),
);

export const spySectionIds = navItems
  .map((item) => item.sectionId)
  .filter((id): id is string => Boolean(id));

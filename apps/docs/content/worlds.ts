export type World = {
  id: "uni" | "pro";
  name: "Uni" | "Pro";
  theme: string;
  accent: string;
  headline: string;
  description: string;
  story: string;
  features: string[];
  hint: string;
  image: string;
  alt: string;
};

export const worlds: World[] = [
  {
    id: "uni",
    name: "Uni",
    theme: "uni",
    accent: "text-olive",
    headline: "Find your kind of campus.",
    description:
      "From the first lecture to the last night of term. Find friends, study partners, clubs and collaborators who make university your own.",
    story:
      "CircleCross Uni is for campus life that feels like yours. From the first lecture to the last night of term, friends, study partners, clubs and collaborators turn a big place into a circle you belong in. Uni is a place to belong, with shared ambitions beside everyday campus life.",
    features: [
      "Campus life",
      "Clubs & events",
      "Shared ambitions",
      "Friends",
      "Study partners",
      "Collaborators",
    ],
    hint: "A place to belong.",
    image: "/images/uni.jpg",
    alt: "University students studying together in a library",
  },
  {
    id: "pro",
    name: "Pro",
    theme: "pro",
    accent: "text-pro",
    headline: "Good work starts with people.",
    description:
      "Go beyond the introduction. Meet thoughtful people, exchange ideas and build professional relationships with room to grow.",
    story:
      "CircleCross Pro is for work that starts with people. Go beyond the introduction. Meet thoughtful people, exchange ideas, and build professional relationships with room to grow. Pro is a new kind of network across workplaces, collaboration, and new opportunities.",
    features: [
      "Workplaces",
      "Collaboration",
      "New opportunities",
      "Thoughtful people",
      "Exchange ideas",
      "Room to grow",
    ],
    hint: "A new kind of network.",
    image: "/images/pro.jpg",
    alt: "Creative professionals collaborating around a table",
  },
];

export function getWorld(id: World["id"]): World {
  const world = worlds.find((entry) => entry.id === id);
  if (!world) {
    throw new Error(`Unknown world: ${id}`);
  }
  return world;
}

export function otherWorlds(id: World["id"]): World[] {
  return worlds.filter((entry) => entry.id !== id);
}

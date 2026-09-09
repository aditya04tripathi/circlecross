export type Principle = {
  title: string;
  copy: string;
  example: string;
  icon: "invite" | "presence" | "people";
};

export const principles: Principle[] = [
  {
    title: "An invitation. Never an obligation.",
    copy: "A crossed path is a possibility, not permission. You decide when to reach out and who to let in.",
    example: "You choose whether a crossed path becomes a message.",
    icon: "invite",
  },
  {
    title: "Your presence. Your choice.",
    copy: "You should be in control of what you share, how you appear and when you want to be discovered.",
    example:
      "You can show a general area, not a pin, and visibility stays off until you turn it on.",
    icon: "presence",
  },
  {
    title: "People first. By design.",
    copy: "Tools should help you step into real life. We're building for meaningful relationships, not endless attention.",
    example:
      "The product is built to help you meet in real life, not to keep you scrolling a feed.",
    icon: "people",
  },
];

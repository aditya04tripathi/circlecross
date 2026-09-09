export type RecoveryCopy = {
  title: string;
  body: string;
};

export const recoveryHomeLabel = "Back to CircleCross";

export const recoveryWorldLinks = [
  { label: "CircleCross Go", href: "/go" },
  { label: "CircleCross Uni", href: "/uni" },
  { label: "CircleCross Pro", href: "/pro" },
] as const;

export const recoveryCopy = {
  notFound: {
    title: "This path does not cross here.",
    body: "The page you asked for is not on this site. Head home, or open one of the CircleCross worlds.",
  } satisfies RecoveryCopy,
  error: {
    title: "Something went quiet on this page.",
    body: "We could not finish loading this view. Head home, or open one of the CircleCross worlds.",
  } satisfies RecoveryCopy,
} as const;

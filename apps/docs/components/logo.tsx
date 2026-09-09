import { cn } from "cn";

export type LogoType = "mark" | "wordmark" | "logo";

type LogoProps = {
  type: LogoType;
  className?: string;
};

function MarkArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 345 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M224.027 229.027L264.513 139.513L175 180L134.513 269.513L224.027 229.027Z"
        fill="var(--mark-accent)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M323.031 82.6827L344.25 61.4644C307.856 23.5794 256.682 0 200 0C143.68 0 92.7967 23.2796 56.4484 60.7413C21.5094 96.7505 0 145.863 0 200C0 256.682 23.5794 307.856 61.4644 344.25C97.4066 378.777 146.225 400 200 400C254.137 400 303.25 378.491 339.259 343.552L318.043 322.336C287.465 351.847 245.852 370 200 370C154.509 370 113.192 352.132 82.6827 323.031C78.879 319.403 75.2432 315.601 71.7884 311.636C71.5581 311.372 71.3286 311.107 71.0999 310.841C45.4842 281.079 30 242.348 30 200C30 154.148 48.1531 112.535 77.6645 81.9573C108.581 49.9233 151.964 30 200 30C248.398 30 292.072 50.2243 323.031 82.6827Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M320 200C320 234.229 305.669 265.111 282.679 286.972C261.157 307.439 232.045 320 200 320C168.316 320 139.501 307.721 118.052 287.662L100.366 305.348C126.346 329.927 161.413 345 200 345C238.949 345 274.311 329.643 300.362 304.655C327.873 278.265 345 241.133 345 200C345 161.413 329.927 126.346 305.348 100.366C278.917 72.4293 241.494 55 200 55C158.867 55 121.735 72.1269 95.3454 99.6383L113.028 117.321C134.889 94.3312 165.771 80 200 80C234.591 80 265.763 94.6356 287.662 118.052C307.721 139.501 320 168.316 320 200Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Wordmark() {
  return (
    <span className="inline-flex items-start">
      CircleCross
      <span className="mt-1 -ml-1 self-start text-[0.4em]" aria-hidden="true">
        ®
      </span>
    </span>
  );
}

export function Logo({ type, className }: LogoProps) {
  const showMark = type === "mark" || type === "logo";
  const showWord = type === "wordmark" || type === "logo";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-ink",
        type === "logo" && "gap-2.5",
        className,
      )}
      role="img"
      aria-label="CircleCross"
    >
      {showMark ? (
        <MarkArt
          className={cn("block w-auto shrink-0", type === "mark" ? "h-full w-full" : "h-[1.75em]")}
        />
      ) : null}
      {showWord ? <Wordmark /> : null}
    </span>
  );
}

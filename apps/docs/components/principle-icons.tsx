export function PresenceControlIllustration({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-[20px] border border-[#525c3525] bg-[#f5f3e9ee] px-4 py-3 shadow-[0_8px_24px_#34401b12] backdrop-blur-[6px] ${className}`}
      role="img"
      aria-label="Illustration of a privacy visibility control set to off"
    >
      <span className="relative h-7 w-[48px] shrink-0 rounded-full bg-[#e8e9df] shadow-[inset_0_0_0_1px_#767a63]">
        <span className="absolute top-0.5 left-0.5 size-6 rounded-full bg-ink" />
      </span>
      <span className="min-w-0">
        <span className="block font-[Georgia,'Times_New_Roman',serif] text-[15px] tracking-[-0.04em] text-ink">
          Presence
        </span>
        <span className="block text-[11px] leading-[1.4] text-soft">Off until you choose</span>
      </span>
    </div>
  );
}

export function PrincipleIcon({ name }: { name: "invite" | "presence" | "people" }) {
  if (name === "invite") {
    return (
      <svg viewBox="0 0 40 28" fill="none" aria-hidden="true" className="h-[22px] w-[32px]">
        <circle cx="13" cy="14" r="10.5" stroke="#767a63" strokeWidth="1.2" />
        <circle cx="27" cy="14" r="10.5" stroke="#767a63" strokeWidth="1.2" />
      </svg>
    );
  }
  if (name === "presence") {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="size-[22px]">
        <circle cx="14" cy="14" r="11" stroke="#767a63" strokeWidth="1.2" />
        <circle cx="14" cy="14" r="4.5" stroke="#767a63" strokeWidth="1.2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 28" fill="none" aria-hidden="true" className="h-[22px] w-[34px]">
      <circle cx="10" cy="14" r="8" stroke="#767a63" strokeWidth="1.2" />
      <circle cx="30" cy="14" r="6.5" stroke="#767a63" strokeWidth="1.2" />
    </svg>
  );
}

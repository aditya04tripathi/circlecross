"use client";
import { useEffect, useRef, useState } from "react";
import { Mark, Arrow } from "./ui";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <>
      <header className="navigation">
        <a href="#" className="wordmark" aria-label="CircleCross home">
          <Mark />
          CircleCross<span className="brand-period">®</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#idea">The idea</a>
          <a href="#worlds">Our worlds</a>
          <a href="#trust">Made for you</a>
        </nav>
        <a className="nav-cta" href="#start">
          Find your circle <Arrow diagonal />
        </a>
        <button
          ref={trigger}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>
      <dialog ref={dialog} className="mobile-menu" onCancel={close}>
        <button className="menu-close" onClick={close} aria-label="Close navigation">
          ×
        </button>
        <Mark />
        <nav aria-label="Mobile navigation">
          {[
            ["The idea", "#idea"],
            ["Our worlds", "#worlds"],
            ["Made for you", "#trust"],
            ["Find your circle", "#start"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
              <Arrow diagonal />
            </a>
          ))}
        </nav>
        <p>Good things happen when we cross paths.</p>
      </dialog>
    </>
  );
}

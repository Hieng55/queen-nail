"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="welcome-popup"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div
        className="welcome-popup__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Queen Nails Spa promotion"
      >
        <Image
          className="welcome-popup__image"
          src="/images/popup/queen-nails-post.jpg"
          alt="Queen Nails Spa promotion"
          width={1080}
          height={1350}
          priority
          sizes="(max-width: 640px) 90vw, min(680px, 82vw)"
        />
        <button
          ref={closeButtonRef}
          className="welcome-popup__close"
          type="button"
          aria-label="Close promotion"
          onClick={() => setIsOpen(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { MorphIcon } from "morphicons/react";
import { Phone } from "lucide";
import ContactBar from "./ContactBar";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      hero.style.setProperty("--hero-progress", progress.toFixed(3));
      frame = 0;
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/background/0_Nail_Salon_Manicure_1280x720.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__frame" aria-hidden="true">
        <span className="hero__corner hero__corner--tl" />
        <span className="hero__corner hero__corner--tr" />
        <span className="hero__corner hero__corner--bl" />
        <span className="hero__corner hero__corner--br" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow"><span /> Queen Nails Spa <span /></p>
        <h1 id="hero-title">Where Beauty<br /><em>Reigns</em></h1>
        <p className="hero__copy">Impeccable nail artistry, thoughtful care, and a calm experience designed around you.</p>
        <div className="hero__actions">
          <a className="hero__cta" href="https://www.lldtek.org/salon/appt/VGtOZk1USTFNRE09" target="_blank" rel="noopener noreferrer">
            Book Appointment
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
          </a>
          <a className="hero__call-mobile" href="tel:+17042434698">
            <MorphIcon icon={Phone} size={17} color="currentColor" strokeWidth={1.6} reducedMotion="user" label="Call" />
            <span>Call (704) 243-4698</span>
          </a>
          <div className="hero__socials-mobile" aria-label="Queen Nails social links and location">
            <a href="https://maps.google.com/?cid=12497902247688058167" target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><img src="/icons/brands/google-maps.svg" alt="" /></a>
            <a href="https://www.facebook.com/queennailswaxhaw/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src="/icons/brands/facebook.svg" alt="" /></a>
            <a href="https://www.instagram.com/bareluxenailspa_waxhawnc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/icons/brands/instagram.svg" alt="" /></a>
          </div>
        </div>
      </div>

      <ContactBar />
    </section>
  );
}

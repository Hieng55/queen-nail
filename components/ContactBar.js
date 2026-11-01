"use client";

import { MorphIcon } from "morphicons/react";
import { Phone } from "lucide";

const brandLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/queennailswaxhaw/",
    icon: "/icons/brands/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bareluxenailspa_waxhawnc/",
    icon: "/icons/brands/instagram.svg",
  },
  {
    label: "Google Maps",
    href: "https://maps.google.com/?cid=12497902247688058167",
    icon: "/icons/brands/google-maps.svg",
  },
];

export default function ContactBar() {
  return (
    <section className="contact-bar" aria-label="Contact and social links">
      <div className="contact-bar__inner">
        <div className="contact-bar__details">
          <a className="contact-item" href="tel:+17042434698">
            <span className="contact-item__icon contact-item__icon--line">
              <MorphIcon
                icon={Phone}
                size={19}
                color="currentColor"
                strokeWidth={1.6}
                reducedMotion="user"
                label="Phone"
              />
            </span>
            <span>
              <small>Call the salon</small>
              <strong>(704) 243-4698</strong>
            </span>
          </a>

        </div>

        <div className="contact-bar__socials">
          <span className="contact-bar__follow">Follow Queen Nails</span>
          {brandLinks.map((item) => (
            <a
              className="brand-social"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              key={item.label}
            >
              <img src={item.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

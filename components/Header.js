"use client";

import Image from "next/image";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const leftNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
];

const rightNavigation = [
  { label: "Gallery", href: "/#gallery" },
  {
    label: "Booking",
    href: "https://www.lldtek.org/salon/appt/VGtOZk1USTFNRE09",
    external: true,
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  return (
    <header className="site-header" id="home">
      <div className="announcement">
        <span className="announcement__line" aria-hidden="true" />
        <p>Luxury at your fingertips</p>
        <span className="announcement__diamond" aria-hidden="true">◆</span>
        <p>Beauty fit for a queen</p>
        <span className="announcement__line" aria-hidden="true" />
      </div>

      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Queen Nails Spa — Home">
          <Image src="/images/logo/logo (5).png" alt="Queen Nails Spa" width={923} height={665} priority />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MorphIcon icon={menuOpen ? X : Menu} size={22} color="currentColor" strokeWidth={1.6} spring="bouncy" reducedMotion="user" label={menuOpen ? "Close menu" : "Open menu"} />
        </button>

        <div className={`nav-panel${menuOpen ? " open" : ""}`} id="main-menu">
          <ul className="nav-links nav-links--left">
            {leftNavigation.map((item) => (
              <li key={item.href}>
                <a
                  className={pathname === item.href ? "active" : undefined}
                  href={item.href}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <ul className="nav-links nav-links--right">
              {rightNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    className={pathname === item.href ? "active" : undefined}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

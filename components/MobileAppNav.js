"use client";

import { MorphIcon } from "morphicons/react";
import { Calendar, CalendarCheck, Home, HouseHeart, List, ListChecks, MessageSquare, MessageSquareHeart, Phone, PhoneCall } from "lucide";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/", icon: Home, activeIcon: HouseHeart },
  { label: "Services", href: "/services", icon: List, activeIcon: ListChecks },
  { label: "Book", href: "https://book.gocheckin.net/v3/nails/bare-luxe-nail-spa-21632/choose-service?key=8UXEgGI3-bR-PqpMeHF_co-93", external: true, featured: true, icon: Calendar, activeIcon: CalendarCheck },
  { label: "Reviews", href: "/reviews", icon: MessageSquare, activeIcon: MessageSquareHeart },
  { label: "Contact", href: "/contact", icon: Phone, activeIcon: PhoneCall },
];

export default function MobileAppNav() {
  const pathname = usePathname();
  const [engaged, setEngaged] = useState(null);

  return (
    <nav className="mobile-dock" aria-label="Mobile navigation">
      {links.map((link) => (
        <Link
          className={`${link.featured ? "mobile-dock__featured " : ""}${pathname === link.href ? "active" : ""}`.trim()}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          prefetch={link.external ? false : undefined}
          aria-current={pathname === link.href ? "page" : undefined}
          onPointerEnter={() => setEngaged(link.label)}
          onPointerLeave={() => setEngaged(null)}
          onPointerDown={() => setEngaged(link.label)}
          onFocus={() => setEngaged(link.label)}
          onBlur={() => setEngaged(null)}
          key={link.label}
        >
          <span>
            <MorphIcon icon={pathname === link.href || engaged === link.label ? link.activeIcon : link.icon} size={21} color="currentColor" strokeWidth={1.6} spring="bouncy" reducedMotion="user" label={link.label} />
          </span>
          <small>{link.label}</small>
        </Link>
      ))}
    </nav>
  );
}

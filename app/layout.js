import { Forum, Jost } from "next/font/google";
import "./globals.css";
import MobileAppNav from "../components/MobileAppNav";
import { business, siteUrl } from "../lib/site";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luxury Nail Salon in Waxhaw, NC | Queen Nails Spa",
    template: "%s | Queen Nails Spa",
  },
  description:
    "Discover refined manicures, spa pedicures, waxing, and nail care at Queen Nails Spa in Waxhaw, North Carolina.",
  applicationName: "Queen Nails Spa",
  category: "beauty",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Queen Nails Spa",
    title: "Luxury Nail Salon in Waxhaw, NC | Queen Nails Spa",
    description:
      "Refined manicures, spa pedicures, waxing, and thoughtful nail care in Waxhaw, North Carolina.",
    url: "/",
    images: [{
      url: "/images/about-us/woman-showing-floral-manicure-with-rose-nail-art-garden.jpg",
      width: 1200,
      height: 800,
      alt: "Floral manicure by Queen Nails Spa in Waxhaw, North Carolina",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen Nails Spa | Waxhaw, NC",
    description: "Refined nail care and spa rituals in Waxhaw, North Carolina.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  "@id": `${siteUrl}/#nail-salon`,
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/images/about-us/woman-showing-floral-manicure-with-rose-nail-art-garden.jpg`,
  description: "A refined nail salon offering manicures, spa pedicures, waxing, and nail enhancements in Waxhaw, North Carolina.",
  telephone: business.telephone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...business.address,
  },
  areaServed: { "@type": "City", name: "Waxhaw, North Carolina" },
  hasMap: "https://maps.google.com/?cid=12497902247688058167",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:30",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/queennailswaxhaw/",
    "https://www.instagram.com/bareluxenailspa_waxhawnc/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${forum.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <MobileAppNav />
      </body>
    </html>
  );
}

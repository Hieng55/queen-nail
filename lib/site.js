export const siteUrl = "https://queennailswaxhaw.com";

export const business = {
  name: "Queen Nails Spa",
  telephone: "+1-704-243-4698",
  displayTelephone: "(704) 243-4698",
  address: {
    streetAddress: "3905 Providence Road South, Suite D",
    addressLocality: "Waxhaw",
    addressRegion: "NC",
    postalCode: "28173",
    addressCountry: "US",
  },
};

export function pageMetadata({ title, description, path }) {
  const canonical = path === "/" ? "/" : `${path}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: business.name,
      title,
      description,
      url: canonical,
      images: [
        {
          url: "/images/about-us/woman-showing-floral-manicure-with-rose-nail-art-garden.jpg",
          width: 1200,
          height: 800,
          alt: "Floral manicure by Queen Nails Spa in Waxhaw, North Carolina",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/about-us/woman-showing-floral-manicure-with-rose-nail-art-garden.jpg"],
    },
  };
}

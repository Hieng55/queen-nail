import { siteUrl } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/reviews", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];

  return pages.map(({ path, ...entry }) => ({
    url: `${siteUrl}${path}/`,
    ...entry,
  }));
}

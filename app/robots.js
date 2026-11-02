export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
    }],
    sitemap: "https://queennailswaxhaw.com/sitemap.xml",
    host: "https://queennailswaxhaw.com",
  };
}

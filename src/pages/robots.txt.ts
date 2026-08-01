import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.href.replace(/\/$/, "") : "https://shammasktl.vercel.app";
  const sitemapUrl = `${origin}/sitemap-index.xml`;

  const content = [
    "# Public SEO Crawlability Configuration",
    "User-agent: *",
    "Allow: /",
    "Disallow: /404/",
    "Disallow: /404.html",
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
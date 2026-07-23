import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://shammasktl.vercel.app");
  const sitemap = new URL("sitemap-index.xml", origin);

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /404/",
      `Sitemap: ${sitemap.href}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
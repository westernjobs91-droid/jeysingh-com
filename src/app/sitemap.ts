import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";

const paths = [
  "", "/books", "/books/az-104", "/books/git", "/portfolio", "/learn", "/learn/read-azure-cli",
  "/learn/cloud-migration", "/about", "/contact", "/roadmap",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...paths.map(p => ({ url: `${site.url}${p}`, lastModified: new Date("2026-11-16") })),
    ...articles.map(a => ({ url: `${site.url}/learn/${a.slug}`, lastModified: new Date(a.updated) })),
  ];
}

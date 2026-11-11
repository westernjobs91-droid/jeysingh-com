import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "", "/books", "/books/az-104", "/portfolio", "/learn", "/learn/read-azure-cli",
  "/learn/cloud-migration", "/about", "/contact", "/roadmap",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(p => ({ url: `${site.url}${p}`, lastModified: new Date("2026-11-11") }));
}

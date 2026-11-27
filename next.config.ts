import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // Keep the free sample PDF out of Google so searchers land on the book page.
      { source: "/books/Git-GitHub-FREE-SAMPLE.pdf", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
  async redirects() {
    return [
      // Short link printed in the book. Keep it working.
      { source: "/az104", destination: "/books/az-104", permanent: false },
      { source: "/az-104", destination: "/books/az-104", permanent: false },
      { source: "/git", destination: "/books/git", permanent: false },
      { source: "/github", destination: "/books/git", permanent: false },
      { source: "/certifications", destination: "/about#credentials", permanent: true },
    ];
  },
};

export default nextConfig;

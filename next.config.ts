import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short link printed in the book. Keep it working.
      { source: "/az104", destination: "/books/az-104", permanent: false },
      { source: "/az-104", destination: "/books/az-104", permanent: false },
      { source: "/certifications", destination: "/about#credentials", permanent: true },
    ];
  },
};

export default nextConfig;

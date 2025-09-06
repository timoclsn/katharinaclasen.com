import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  transpilePackages: ["next-mdx-remote"],
  async rewrites() {
    return [
      {
        source: "/ods/script",
        destination: "https://assets.onedollarstats.com/stonks.js",
      },
      {
        source: "/ods/events",
        destination: "https://collector.onedollarstats.com/events",
      },
    ];
  },
};

export default nextConfig;

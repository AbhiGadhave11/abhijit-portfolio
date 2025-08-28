import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname, // prevent scanning whole system
  experimental: {
    turbo: {}, // turbopack config (no 'enabled' property)
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.flogviewer.com'],
  },
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;

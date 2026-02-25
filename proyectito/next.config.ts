import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      }
    ]
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

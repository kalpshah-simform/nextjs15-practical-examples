import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
  }
};

export default nextConfig;

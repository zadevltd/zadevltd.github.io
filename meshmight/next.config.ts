import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure proper static export
  trailingSlash: false,
  // Output will be copied to project root via build script
};

export default nextConfig;

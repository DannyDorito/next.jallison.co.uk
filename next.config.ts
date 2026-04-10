import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  images: { unoptimized: true },

  experimental: {
    optimizePackageImports: [ 'lucide-react' ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

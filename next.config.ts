import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for cPanel hosting
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Pin the project root so Turbopack doesn't pick the parent dir when it
  // finds other lockfiles (pnpm-lock.yaml in home). This prevents missing
  // asset errors for imports from the public folder.
  turbopack: {
    root: __dirname,
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ...(process.env.CRUMBWAFFLE_STATIC_EXPORT === '1' ? { output: 'export' as const } : {}),
};

export default nextConfig;

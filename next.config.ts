import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
    dynamicIO: true
  },
  images: {
    remotePatterns: [
      {
        hostname: '**.scdn.co'
      },
      {
        hostname: '**.spotifycdn.com'
      }
    ]
  }
}

export default nextConfig

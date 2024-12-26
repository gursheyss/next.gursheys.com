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
  },
  redirects: async () => {
		return [
			{
				source: "/austere",
				destination: "https://github.com/gursheyss/austere",
				permanent: true,
			},
			{
				source: "/zipp",
				destination: "https://github.com/gursheyss/zipp",
				permanent: true,
			},
		];
	},
}

export default nextConfig

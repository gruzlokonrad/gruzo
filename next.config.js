const { type } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER: "GTM-56CQ7C83",
  },
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.gruzo.dev/:path*',
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  experimental: {
    swcTraceProfiling: false,
  },
  generateEtags: false,
  allowedDevOrigins: ['10.1.1.52']
}

module.exports = nextConfig
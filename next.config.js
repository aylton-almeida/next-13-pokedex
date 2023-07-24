/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.pokemon.com']
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig

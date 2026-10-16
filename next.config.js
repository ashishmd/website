/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  // Export pages as <route>/index.html so extensionless URLs resolve the
  // same way on GitHub Pages and any other static host.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: false,
  },
}

module.exports = nextConfig

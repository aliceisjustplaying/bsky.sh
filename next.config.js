/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  headers: [
    {
      source: '/.well-known/atproto-did',
      headers: [{ key: 'Content-Type', value: 'text/plain' }],
    },
  ],
};

module.exports = nextConfig;

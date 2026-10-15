/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional: proxy /api/tarax/* to your TARAX backend (set TARAX_BACKEND_URL in Vercel).
  async rewrites() {
    const target = process.env.TARAX_BACKEND_URL;
    return target ? [{ source: "/api/tarax/:path*", destination: `${target}/:path*` }] : [];
  },
};

module.exports = nextConfig;

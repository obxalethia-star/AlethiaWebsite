/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      { source: '/solutions', destination: '/services', permanent: true },
      { source: '/solutions/:path*', destination: '/services', permanent: true },
      { source: '/erp', destination: '/services', permanent: true },
      { source: '/register', destination: '/about#briefing', permanent: true }
    ];
  }
};

export default nextConfig;

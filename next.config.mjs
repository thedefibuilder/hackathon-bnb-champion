/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.coinmarketcap.com",
      },
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "icodrops.com",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
      },
      {
        protocol: "https",
        hostname: "chainspot.io",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;

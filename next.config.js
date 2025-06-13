/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;

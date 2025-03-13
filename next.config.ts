/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadkon.ir",
      },
    ],
  },
};

module.exports = nextConfig;

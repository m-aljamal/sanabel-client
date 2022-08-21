/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;

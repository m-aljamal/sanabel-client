/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    locales: ['ar-SA', 'en-US'],
    defaultLocale:'ar-SA',
     
  }
}

module.exports = nextConfig

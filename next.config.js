/** @type {import('next').NextConfig} */

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["www.sportsadda.com", "s.sporty.net"]
    },
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development",
    },
    env: {
      ANALYTICS_ID : process.env.ANALYTICS_ID
    }
  };
  
  const withPWA = require("next-pwa")({
    dest: "public",
    disable: true,
    register: true,
    skipWaiting: true
  });
  
  module.exports = withPWA(nextConfig);
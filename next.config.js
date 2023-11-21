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
  };
  
  const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true
  });
  
  module.exports = withPWA(nextConfig);
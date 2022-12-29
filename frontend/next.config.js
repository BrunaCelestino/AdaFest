/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TRANSACTIONAL_URL: process.env.TRANSACTIONAL_URL,
    USER_URL: process.env.USER_URL,
    CEP_URL: process.env.CEP_URL,
    API_GATEWAY_URL: process.env.API_GATEWAY_URL,
    API_GATEWAY_LOCAL: process.env.API_GATEWAY_LOCAL,
    BACK_ENV: process.env.BACK_ENV,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

module.exports = nextConfig;

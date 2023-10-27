/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MEST_BACKEND_URL: process.env.MEST_BACKEND_URL,
  },
};

module.exports = nextConfig;

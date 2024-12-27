/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MEST_BACKEND_URL: process.env.MEST_BACKEND_URL,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  },
  images: {
    unoptimized: true,
    domains: ["s.gravatar.com"],
  },
  target: "serveless",
};

module.exports = nextConfig;

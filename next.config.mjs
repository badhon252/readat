/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  navigationMenu: {
    default: {
      // ... default styles
    },
    active: {
      // ... active state styles
      "background-color": "gray.200",
    },
  },
};

export default nextConfig;

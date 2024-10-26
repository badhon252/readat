/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  compilerOptions: {
    types: ["@testing-library/jest-dom"],
  },
};

export default nextConfig;

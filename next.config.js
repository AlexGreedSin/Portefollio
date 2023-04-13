/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = '/opt/build/repo/pages';
    return config;
  },
};

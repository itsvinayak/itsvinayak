const { withContentCollections } = require('@content-collections/next');

const config = {
  dest: 'public',
  register: true,
  scope: '/',
}

if (process.env.DEPLOYMENT_TYPE === 'development') {
  config.disable = true;
}

const withPWA = require('next-pwa')(config);

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  }
});

module.exports = withContentCollections(nextConfig);

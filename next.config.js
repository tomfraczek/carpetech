/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['assets-global.website-files.com', 'images.ctfassets.net'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;

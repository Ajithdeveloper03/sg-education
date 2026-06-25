/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/sg-education',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

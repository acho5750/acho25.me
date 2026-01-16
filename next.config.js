/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Set basePath if deploying to a subdirectory
  // basePath: '/your-repo-name',
  // trailingSlash: true,
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://s3-us-west-2.amazonaws.com', 's3-us-west-2.amazonaws.com']
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig

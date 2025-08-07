/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-blog',
        destination: '/blog',
        permanent: true, // for SEO
      },
      {
        source: '/dashboard',
        destination: '/login',
        permanent: false, // temporary (e.g. for auth)
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/store/:id',
        destination: '/products/:id', // internal rewrite
      },
      {
        source: '/api/products',
        destination: 'https://dummyjson.com/products', // external API proxy
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.iconscout.com',
          pathname: '/icon/free/png-256/free-check-circle-1781302-1513623.png',
        },
        {
          protocol: 'https',
          hostname: 'cdn3.iconfinder.com',
          pathname: '/data/icons/arrows-160/96/uncheckedV_circle-512.png',
        },
      ],
    },
  };
  
  export default nextConfig;
  
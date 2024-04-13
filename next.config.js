/** @type {import('next').NextConfig} */

const nextConfig = {
  // output:'export', 설정 시 static 모드, 기본적으로 dynamic 모드
  async rewrites() {
    return [
      {
        source: "/upload/:slug",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/upload/:slug`,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

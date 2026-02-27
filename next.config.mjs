/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 型エラーを無視
  },
  images: {
    unoptimized: true,
  },
}
export default nextConfig

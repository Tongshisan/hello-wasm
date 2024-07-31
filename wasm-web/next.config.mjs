/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 修改 Webpack 配置
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // 返回修改后的配置
    return config;
  },
};

export default nextConfig;

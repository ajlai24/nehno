module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    GRAPHCMS_PROJECT_API: process.env.GRAPHCMS_PROJECT_API,
    GRAPHCMS_DEV_AUTH_TOKEN: process.env.GRAPHCMS_DEV_AUTH_TOKEN,
    GRAPHCMS_PROD_AUTH_TOKEN: process.env.GRAPHCMS_PROD_AUTH_TOKEN,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

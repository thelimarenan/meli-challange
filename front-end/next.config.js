const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

const BUILD_ID = new Date().getTime().toString();

dotenvLoad();

const plugins = [[nextEnv()]];

const nextConfig = {
  devIndicators: {
    autoPrerender: false
  },
  generateBuildId: async () => {
    return BUILD_ID;
  },
  env: {
    BUILD_ID
  }
};

module.exports = withPlugins([...plugins], nextConfig);

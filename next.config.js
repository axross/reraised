// const WorkerPlugin = require("worker-plugin");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config.plugins.push(new WorkerPlugin());

    return config;
  },
};

/* eslint-disable @typescript-eslint/no-var-requires */
const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit');

sourcebit.fetch(sourcebitConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

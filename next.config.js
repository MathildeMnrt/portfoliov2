/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  // Your existing next-translate configurations can go here
});

module.exports = {
  ...nextConfig,
  i18n: undefined, // Ensure i18n is not overridden
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

/* const nextConfig = {}
module.exports = nextConfig

const nextTranslate = require("next-translate-plugin");
const config = nextTranslate({});
config.i18n = undefined;

module.exports = config; */


/*
const config = nextTranslate(nextConfig);
config.i18n.localeDetection = false;
config.i18n = undefined;
module.exports = config;

module.exports = nextTranslate({
  reactStrictMode: true,
}); */
module.exports = ({ env }) => ({
  proxy: true,
  url: process.env.APP_URL, // replaces `host` and `port` properties in the development environment
  app: {
    keys: process.env.APP_KEYS
  },
});

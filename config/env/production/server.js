console.log("*******")
console.log(process.env)


module.exports = ({ env }) => ({
  url: env('APP_URL'),
  port: env.int('PORT', 1337),
  proxy: false,
  app: {
    keys: env.array('APP_KEYS')
  },
});


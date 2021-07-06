module.exports = {
  env: {
    local: process.env.ENV_LOCAL,
    URL_API:
      process.env.NODE_ === 'development'
        ? process.env.ENV_DEVELOPMENT
        : process.env.NODE_ === 'test'
        ? process.env.ENV_TEST
        : process.env.ENV_PRODUCCION,
    NODE_: process.env.NODE_,
  },
  jsconfigPaths: true,
}

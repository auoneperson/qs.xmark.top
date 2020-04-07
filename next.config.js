/* eslint-disable */
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

const withPlugins = require("next-compose-plugins/lib");

module.exports = withPlugins([withCss, withLess], {
  //[withSass,withCss]可以引入各种依赖，less也可以
  useFileSystemPublicRoutes: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config
  },
})

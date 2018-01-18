const PurgecssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob-all")

module.exports = {
  webpack(config) {
    config.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync(["./index.js"])
      })
    )
    return config
  }
}

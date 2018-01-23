const PurgecssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob-all")

module.exports = {
  entry: ["./src/index.js", "./styles.css"],
  webpack(config) {
    config.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync(["./src/index.js"])
      })
    )
    return config
  }
}

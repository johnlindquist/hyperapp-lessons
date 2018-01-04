const cssnext = require("postcss-cssnext")
const fontMagician = require("postcss-font-magician")
module.exports = {
  plugins: [fontMagician, cssnext]
}

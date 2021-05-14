const path = require("path")

module.exports = {
  future: {
    webpack5: true,
  },
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
}

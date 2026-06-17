const path = require('path')

module.exports = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  images: {
    unoptimized: true,
    disableStaticImages: true
  }
}

const path = require('path')

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "shared/assets/styles/to-import";',
      },
    },
  },
}

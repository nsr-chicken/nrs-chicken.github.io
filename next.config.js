const path = require('path')
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/home' },
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
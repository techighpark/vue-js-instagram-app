const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/take-highsta',
  pwa: {
    name: 'take-high',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html'],
    },
  },
});

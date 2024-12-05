const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module
    .rule('vue')
    .use('my-enhance-vue-loader')
    .loader('../../vue-enhance-loader.js')
  }
})

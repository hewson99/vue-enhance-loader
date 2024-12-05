#### webpack loader plugin

this loader allows you to resue component's template and don't need to create the SFC file for the component

#### How to Use

it's very simple and easy to use.

```js
// in vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module
    .rule('vue')
    .use('my-enhance-vue-loader')
    .loader('path/to/vue-enhance-loader.js')
  }
})


```
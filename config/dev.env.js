var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  devServer: {
    proxy: {
      '/api': {
        target: '',  // 设置后端接口的访问地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  // 将请求路径中的 '/api' 替换为空字符串
        }
      }
    }
  }
})

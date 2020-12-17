// 只要修改了vue.config.js这个配置文件，都要重启项目
module.exports = {
  devServer: {
    // 用代理的方式来解决浏览器同源策略对ajax的限制
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标远程服务器
        ws: true,
        changeOrigin: true   // 允许改变“域”
      },
      '/api': {
        target: 'http://10.20.158.29:9000',   // 是老师的IP的内网地址
        changeOrigin: true
      }
    }
  }
}

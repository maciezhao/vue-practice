// vue.config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 项目部署的基础路径
  publicPath: './',
  // 将构建好的文件输出到哪里
  outputDir: 'dist',
  assetsDir: 'static',
  // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认为true
  lintOnSave: true,
  // 使用带有浏览器内编译器的完整构建版本
  transpileDependencies: [/* string or regex */],
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      if (process.env.npm_lifecycle_event === 'analyze') {
        config.plugins.push(
          new BundleAnalyzerPlugin()
        );
      }

    } else {
      // 为开发环境修改配置...
    }

  },

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    // extract: true,

    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {}
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, //热加载
    host: '0.0.0.0', //ip地址
    port: 80, //端口
    disableHostCheck: true,
    https: false, //false关闭https，true为开启
    open: false, //自动打开浏览器
    proxy: 'http://localhost:80'
    // disableHostCheck: true
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('static', resolve('src/static'))
      
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  },
  // 第三方插件的选项
  pluginOptions: {

  }
}

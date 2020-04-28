// vue.config.js
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 项目部署的基础路径
    publicPath: '/',
    // 将构建好的文件输出到哪里
    outputDir: 'dist',
    // 放置静态资源的地方 (js/css/img/font/...)
    lintOnSave: true,
    // 使用带有浏览器内编译器的完整构建版本
    transpileDependencies: [/* string or regex */],
    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,
    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
    pwa: {},

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            if(process.env.npm_lifecycle_event === 'analyze'){
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
        host: 'localhost', //ip地址
        port: 8080, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: 'http://localhost:8080',
    },

    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('static',resolve('src/static'))
    },
    // 第三方插件的选项
    pluginOptions: {
       
    }
}

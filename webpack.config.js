var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var log4js = require('log4js');
var logger = log4js.getLogger();

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var webpackConfig = {
  entry: {
    // index : SRC_PATH + "/index.js",
    commons: [
        'babel-polyfill',
        'react',
        'react-dom'
    ]
  },
  output: {
      path: path.join(__dirname, "build"),
      filename: "service/[name]/bundle.js",
      chunkFilename: "[id].chunk.js"
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            include: /src/,
            query:
              {
                presets:['react','es2015']
              }
          },
           {
              test: /\.scss$/,
              loaders: ['style', 'css', 'sass'],
              include: SRC_PATH
          }, {
              test: /\.(png|jpg)$/,
              loader: 'url?limit=40000'
          }
      ]
  },
  resolve:{
      extensions:['','.js','.json'],
      alias: {
        svc2Src: "../../",//service目录重置回src目录
      }
  },
  devServer: {
      hot: true,
      inline: true
  },
  babel: {
      presets: ['es2015', 'stage-1', 'react']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      title : "index",
      filename : "index.html",
      template: 'src/tmpl/index.html',
      inject: true,
      chunks: ["index","commons"]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      // TODO: set node_modules fallback
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    })
  ]
};
// 获取指定路径下的入口文件
function getEntries(globPath) {
     var files = glob.sync(globPath),
       entries = {};

     files.forEach(function(filepath) {

         // 取倒数第二层(view下面的文件夹)做包名
         var split = filepath.split('/');
         var name = split[split.length - 2];

         entries[name] = './' + filepath;
     });

     return entries;
}

var entries = getEntries('src/service/**/entry.js');

Object.keys(entries).forEach(function(name) {
    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
    webpackConfig.entry[name] = entries[name];

    // 每个页面生成一个html
    var plugin = new HtmlWebpackPlugin({
        // 生成出来的html文件名
        filename: 'service/'+name + '/index.html',
        // 每个html的模版，这里多个页面使用同一个模版
        template: 'src/tmpl/entry.html',
        // 自动将引用插入html
        inject: true,
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: [name,"commons"]//公用模块commons必须引入!
    });
    webpackConfig.plugins.push(plugin);
})

module.exports = webpackConfig;

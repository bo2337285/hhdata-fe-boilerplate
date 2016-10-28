var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var port = 3000;
var app = express();
var path = require('path');
var favicons = require('connect-favicons');
var fs = require('fs');
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')

// webpack编译器
var compiler = webpack(webpackConfig);

// webpack-dev-server中间件
// var devMiddleware = require('webpack-dev-middleware')(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     stats: {
//         hot: true,
//         colors: true,
//         chunks: false
//     }
// });
//
// app.use(devMiddleware)

app.use(WebpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true,chunks: false }
}))
app.use(WebpackHotMiddleware(compiler))

app.use(favicons(__dirname));
// app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.post("/data/:jsonName", function(req, res) {
  console.log("get data" +req.params.jsonName+'.json' );
  var json = JSON.parse(fs.readFileSync(__dirname + '/mock/'+req.params.jsonName+'.json',"utf-8"));
  res.json(json);
})

// 路由
app.get('/:viewname?', function(req, res, next) {

    var viewname = req.params.viewname
        ? '/service/'+req.params.viewname + '/index.html'
        : 'index.html';
    var filepath = path.join(compiler.outputPath, viewname);

    // 使用webpack提供的outputFileSystem
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

module.exports = app.listen(port, function(err) {
    if (err) {
        // do something
        return;
    }

    console.log('Listening at http://localhost:' + port + '\n')
})

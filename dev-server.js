var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var port = 3000;
var app = express();
var path = require('path');
//log4js
var log4js = require("log4js");
var log4js_config = require("./logConf.json");
var logger = log4js.getLogger();
// log4js.configure(log4js_config);
// var LogFile = log4js.getLogger('log_file');

// webpack编译器
var compiler = webpack(webpackConfig);

// webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

app.use(devMiddleware)

// 路由
app.get('/:viewname?', function(req, res, next) {

  debugger;
    var viewname = req.params.viewname
        ? req.params.viewname + '.html'
        : 'index.html';

    logger.trace(viewname);
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

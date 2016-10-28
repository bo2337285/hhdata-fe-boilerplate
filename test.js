var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var port = 3000;
var app = express();
var path = require('path');
var favicons = require('connect-favicons');
var fs = require('fs');


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/data/:jsonName", function(req, res) {
  console.log("aa");
  var json = fs.readFileSync(__dirname + '/mock/'+req.params.jsonName+'.json',"utf-8")
  res.json(json);
})

module.exports = app.listen(port, function(err) {
    if (err) {
        // do something
        return;
    }

    console.log('Listening at http://localhost:' + port + '\n')
})

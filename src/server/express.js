import express from "express"
const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');

const compiler = webpack(config); 
const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const webpackHotMiddlware = require("webpack-hot-middleware")(
  compiler,
  config.devServer
)

server.use(webpackDevMiddleware);
server.use(webpackHotMiddlware);

const staticMiddleware = express.static("dist") /** For static files */

server.use(staticMiddleware)
server.listen(8000, ()=> {
  console.log('server started');
})

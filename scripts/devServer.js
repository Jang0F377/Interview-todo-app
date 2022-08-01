'use strict';

const Webpack = require('webpack');
const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require('../webpack.config');

const PORT = 7000;
const outPath = path.resolve(__dirname, "index.html");
const srcPath = path.resolve(__dirname, "..");


const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true,
    historyApiFallback: true,

    // This html file should mimic the base page as much as possible
    port: PORT,
    
});
const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(PORT, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:' + PORT);
});
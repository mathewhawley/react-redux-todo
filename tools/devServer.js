import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const {
  config,
  devServerConfig,
} = require('./webpack.config');

const port = 8080;

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, devServerConfig);

server.listen(port, 'localhost');

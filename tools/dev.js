import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { config, devServerConfig } from './webpack.config';
import clean from './clean';
import copy from './copy';

async function init() {
  await clean();
  await copy();

  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, devServerConfig);

  server.listen(8080, 'localhost');
}

init();

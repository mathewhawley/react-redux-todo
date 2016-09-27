import path from 'path';
import webpack from 'webpack';

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  tools: path.resolve(__dirname, '../tools'),
  public: '/assets/',
};

const config = {
  context: PATHS.src,
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './index.js',
  ],
  output: {
    path: PATHS.build,
    publicPath: PATHS.public,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: PATHS.src,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.src,
      },
    ],
  },
  resolve: {
    root: PATHS.src,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({ multistep: true }),
  ],
};

const devServerConfig = {
  contentBase: PATHS.src,
  publicPath: PATHS.public,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
  },
  compress: true,
};

export {
  config,
  devServerConfig,
};

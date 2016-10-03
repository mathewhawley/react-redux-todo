import path from 'path';
import webpack from 'webpack';

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../build'),
  public: '/static/',
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
        test: /\.css$/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            modules: true,
            sourceMap: true,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          })}`,
          'postcss-loader',
        ],
      },
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
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const devServerConfig = {
  contentBase: PATHS.build,
  publicPath: PATHS.public,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
  },
  compress: true,
};

export { config, devServerConfig };

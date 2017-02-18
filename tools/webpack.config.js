import path from 'path';
import webpack from 'webpack';
import StyleLintPlugin from 'stylelint-webpack-plugin';

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
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: PATHS.src,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({ files: '../src/**/*.css' }),
  ],
};

const devServerConfig = {
  contentBase: PATHS.build,
  publicPath: PATHS.public,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
    chunks: false,
  },
  compress: true,
};

export { config, devServerConfig };

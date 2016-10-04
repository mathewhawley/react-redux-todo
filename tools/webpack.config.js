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
          'postcss-loader?pack=default',
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
    new StyleLintPlugin({ files: '../src/**/*.css' }),
  ],
  postcss(bundler) {
    return {
      default: [
        require('postcss-import')({ addDependencyTo: bundler }),
        require('postcss-custom-properties')(),
        require('postcss-custom-media')(),
        require('postcss-media-minmax')(),
        require('postcss-custom-selectors')(),
        require('postcss-calc')(),
        require('postcss-nesting')(),
        require('postcss-color-function')(),
        require('postcss-selector-matches')(),
        require('postcss-selector-not')(),
        require('pleeease-filters')(),
        require('postcss-pseudo-class-any-link')(),
        require('autoprefixer')(),
      ],
    };
  },
};

const devServerConfig = {
  contentBase: PATHS.build,
  publicPath: PATHS.public,
  historyApiFallback: true,
  hot: true,
  stats: { colors: true },
  quiet: true,
  compress: true,
};

export { config, devServerConfig };

import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import DotenvWebpackPlugin from 'dotenv-webpack';

module.exports = {
  context: path.join(__dirname, './'),
  mode: 'development',
  devServer: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  target: 'web',
  entry: {
    app: ['regenerator-runtime/runtime', './src/index.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new DotenvWebpackPlugin({
      path: './.env',
    }),
  ],
  devtool: 'inline-source-map',
};

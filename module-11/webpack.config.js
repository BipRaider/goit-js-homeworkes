// Webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // если собираем  через new ExtractTextPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Перед сборкой удаляет папку и заново пишем dist
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },

  output: {
    filename: '[name].[hash].js',

    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',

        options: {
          attributes: false,
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
            options: {},
          },
          'astroturf/loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,

        use: [
          { loader: 'style-loader', options: {} },
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {} },
          { loader: 'postcss-loader', options: {} },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
            },
          },
        ],
      },
      { test: /\.hbs$/, exclude: /node_modules/, use: 'handlebars-loader' },
    ],
  },
  plugins: [
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    clientLogLevel: 'silent',
    compress: true,
    port: 9000,
  },
};

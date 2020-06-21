// Webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // если собираем  через new ExtractTextPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js', //contenthash
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          attributes: false,
        },
      },
      {
        test: /\.js$/, // расширение файла
        exclude: /node_modules/, // что-то, что не должно обрабатываться
        use: {
          loader: 'babel-loader', // загрузчик или группа загрузчиков
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.hbs$/, exclude: /node_modules/, use: 'handlebars-loader' },
      // если собираем  через new ExtractTextPlugin
      //   {
      //     test: /\.scss$/,
      //     use: ExtractTextPlugin.extract({
      //       fallback: 'style-loader',
      //       use: ['css-loader','sass-loader'],
      //     }),
      //   },
      // если собираем  через ./src/style.css   оставляем это
      //   {
      //     test: /\.css$/,
      //     use: ExtractTextPlugin.extract({
      //       fallback: 'style-loader',
      //       use: ['css-loader'],
      //     }),
      //   },
    ],
  },
  plugins: [
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(),
    // если собираем  через new ExtractTextPlugin
    // new ExtractTextPlugin({
    //   filename: 'style.[hash].css', //contenthash
    //   disable: false,
    //   allChunks: true,
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', //'index.[hash].html' - если надо чтобы хэшировалось
    }),
  ],
};

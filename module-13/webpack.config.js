// Webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // если собираем  через new ExtractTextPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Перед сборкой удаляет папку и заново пишем dist
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  //   mode: 'production',  // создавать в продакшен
  entry: {
    main: './index.js',
  }, // указываеться точка входа может быть несколько
  // настройки
  output: {
    filename: '[name].[hash].js', // указывает папку в которую записывать  данные
    // chunkFilename: '[name].[hash].js', //contenthash
    path: path.resolve(__dirname, 'dist'), // пропишется абсолютный в системе где работаем , и указываем в какую папку скидывает
  },
  // настройки лоадеров и обработчиков (загрузчиков), указывает с каким разрешением искать файлы (тип файлови) что к ним пременять
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        // более серьёзные настройки для загрущика
        options: {
          // Disables attributes processing
          attributes: false,
        },
      },
      {
        test: /\.jsx$/, // расширение файла
        exclude: /node_modules/, // что-то, что не должно обрабатываться ,указываем папку которую игнорировать
        // имена загрузчиков
        use: [
          {
            loader: 'babel-loader', // загрузчик или группа загрузчиков
            options: {}, // более серьёзные настройки для загрущика
          },
          'astroturf/loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        //https://webpack.js.org/loaders/postcss-loader/
        use: [
          { loader: 'style-loader', options: {} },
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {} },
          { loader: 'postcss-loader', options: {} },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'), //синхронная компиляция в два раза быстрее асинхронной компиляции
            },
          },
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
    new CleanWebpackPlugin(), // Передаем {} объект имён папок или файлов что надо удалять
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
      template: './index.html',
      filename: 'index.html', //'index.[hash].html' - если надо чтобы хэшировалось
    }),
  ],
  //https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    clientLogLevel: 'silent',
    compress: true,
    port: 9000,
  },
  //https://webpack.js.org/configuration/devtool/#devtool
  // devtool: 'cheap-module-source-map', // собирает  и development  and production
};

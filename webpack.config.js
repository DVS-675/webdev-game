const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'development';

module.exports = {
   entry: './js/script.ts',
   mode: isProduction ? 'production' : 'development',
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.pug$/,
            loader: 'pug-loader',
         },
         {
            test: /\.(scss|css)$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'postcss-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
      ],
   },
   devtool: isProduction ? 'hidden-source-map' : 'source-map',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
   },

   plugins: [
      new CopyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'img'),
               to: path.resolve(__dirname, 'dist/img'),
            },
         ],
      }),
      new HtmlWebpackPlugin({
         template: './index.html',
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css',
      }),
   ],
   resolve: {
      extensions: ['.ts', '.js'],
   },
   optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
   },
};

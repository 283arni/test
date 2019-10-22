const path = require('path');
const fs = require('fs')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist')
}


const PAGES_DIR = `${PATHS.src}`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    main: PATHS.src
  },
  output: {
    filename: 'js/[name].js',
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },{
      test: /\.(png|jpe?g|gif|woff2?)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader'
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config:{
              path: './postcss.config.js'
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/images`,
        to: `${PATHS.dist}/images`
      }
    ]),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico"
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ]
};
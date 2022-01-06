const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const srcDir = path.resolve(__dirname, 'src')
const destDir = path.resolve(__dirname, 'dist')

const CSSLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: destDir
      }
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js')
        }
      }
    },
    {
      loader: 'sass-loader'
    }
  ]
}

module.exports = {
  entry: path.resolve(srcDir, 'index.js'),
  output: {
    filename: 'main.js',
    path: destDir
  },
  module: {
    rules: [
      CSSLoader
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        another: './src/another-module.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'output management',
        }),
    ],
    output: {
        // filename: 'main.js',
        // filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
      rules: [
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  'file-loader',
              ],
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                  'file-loader',
              ],
          },
      ],
    },
};
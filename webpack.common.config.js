const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { DefinePlugin } = require('webpack');

const outputDirPath = path.resolve(__dirname, "docs");

module.exports = {
  entry: {
    feed: "./src/feed.tsx",
    menu: "./src/menu.tsx"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.template.html",
      filename: path.join(outputDirPath, 'index.html'),
      scriptLoading: 'defer',
      minify: false,
    }),
    new DefinePlugin({
      "process.env.BUILD_TIME": JSON.stringify(new Date())
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: "automatic" }]
            ]
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: outputDirPath
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
  }
};

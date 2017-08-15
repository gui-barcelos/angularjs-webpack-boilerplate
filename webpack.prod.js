const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = Merge(CommonConfig, {
    devtool: 'nosources-source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new BabiliPlugin({
        removeConsole: true,
        removeDebugger: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'string-replace-loader',
              options: {
                search: 'https://localhost/API',
                replace: 'https://host.com/API'
             }
            }
          ]
        }
      ]
    }
})
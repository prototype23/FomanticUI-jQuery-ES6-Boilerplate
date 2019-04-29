const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  // webpack main settings
  mode: 'development',
  // webpack-dev-server settings (live-reload options)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 9000,
    inline: false,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  // Define pre-compilers, linters for each file type
  module: {
    rules: [
      {
        test: /\.scss$/, use: [
          {loader: 'style-loader'},
          {loader: 'css-loader?url=false'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./src/sass', './src/sass/cdnPublicFolder/dev']
            }
          }
        ]
      },
    ]
  }
});

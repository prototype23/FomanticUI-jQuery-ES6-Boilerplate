const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // webpack main settings
  mode: 'production',
  // Define precompilers, linters for each file type
  module: {
    rules: [
      {
        test: /\.scss$/, use: [
          {loader: 'style-loader'},
          {loader: 'css-loader?url=false'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./src/sass', './src/sass/cdnPublicFolder/live']
            }
          }
        ]
      },
    ]
  }
});

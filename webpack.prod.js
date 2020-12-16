const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  // webpack main settings
  mode: 'production',
  // Define precompilers, linters for each file type
  module: {
    rules: [
      {
        test: /\.scss$/, use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?url=false' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/sass'), path.resolve(__dirname, 'src/sass/cdnPublicFolder/live')]
              }
            }
          }
        ]
      },
    ]
  }
});

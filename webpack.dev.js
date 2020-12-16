const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  // webpack main settings
  mode: 'development',
  // Shows Understandable errors for js, may cause problem on ie11
  devtool: 'inline-source-map',
  // webpack-dev-server settings (live-reload options)
  devServer: {
    open: true,
    port: 9000,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'index.bundle.js',
    watchContentBase: true,
    liveReload: true,
    hot: false,
    lazy: false,
    // inline: false,
    // overlay: true,
    // compress: true,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  // Define pre-compilers, linters for each file type
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
                includePaths: [path.resolve(__dirname, 'src/sass'), path.resolve(__dirname, 'src/sass/cdnPublicFolder/dev')]
              }
            }
          }
        ]
      },
    ]
  }
});

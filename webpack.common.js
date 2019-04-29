const path = require('path');

module.exports = {
  // Webpack main settings
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  // Configure how modules are resolved.
  resolve: {
    alias: {
      // When calling '@import 'Compass';.
      Compass: path.resolve(__dirname, 'node_modules/compass-sass-mixins/lib/_compass.sass'),
      // When calling '@import 'CompassAnimate';.
      CompassAnimate: path.resolve(__dirname, 'node_modules/compass-sass-mixins/lib/_animate.sass'),
      // When calling '@import 'CompassReset';.
      CompassReset: path.resolve(__dirname, 'node_modules/compass-sass-mixins/lib/compass/reset/_utilities.sass'),
      // When calling '@import 'Ionicons';
      // Ionicons: path.resolve(__dirname, 'dist/fonts/ionicons/ionicons.css'),
    }
  },
  // Define pre-compilers, linters for each file type
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader?url=false']},
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
            attrs: false
          }
        }
      }
    ]
  },
  // Expose jQuery
  /* plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ], */
  // devtool may have issues with ie11
  devtool: false
};

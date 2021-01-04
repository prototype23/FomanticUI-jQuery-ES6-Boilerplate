
# Fomantic UI - jQuery - ES6 Boilerplate
A boilerplate for advanced content and forms.

## Demo page / Installation
1. Fork/ Download this project
2. [Install Nodejs/NPM](#Install-Nodejs/NPM) (Skip this if you already have nodejs installed)
3. From the project's root run:
```
  npm install
  npm run prod
```

## Development
```
  npm install
  npm run dev
```
- Watches source files and builds the app for development on changes
- Starts a nodejs web-server @ http://localhost:9000/
- Opens the app there with your default browser (you have to manually reload the page)

## Test app for Production
```
npm install
npm run prod
```
- Builds the app for production
- Starts a nodejs web-server @ http://localhost:9000/
- Opens the app there with your default browser

## Build app for Production
```
npm install
npm run build:prod
```


## Bundle-stats
```
npm install
npm run stats
```
Builds the app for production and opens an interactive page on your browser with bundle statistics.
This will help you to understand your bundle and optimize your app.
Also creates a `bundle-stats.json` file.


## What's included on package.json
  - [webpack v5](https://webpack.js.org/) - Asset Bundler.
    - Configuration for multiple [environments](#environments) and CDNs.
    - [Bundle Analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer)
  - [Babel v7](https://babeljs.io/) - ES6 javascript compiler.
    - Configuration for ie11 support.
  - [IDE tools - ESLint v5](#IDE-tools-ESLint)
  - [Sass](http://sass-lang.com/) and [Compass mixins](https://github.com/askucher/compass-sass-mixins) - Scss compiler and utils.

## What's included with simple CDN load
  - [Fomantic UI 2.8.7](https://Fomantic-ui.com) - User Interface is the language of the web.
    - Loaded by CDN url. You can easily update the version.
  - [Ionicons 4.5.10-0](https://ionicons.com/v4/) - Font icons.
    - Fonts are loaded by cdn url by default, but boilerplate contains an example if you prefer to load them with webpack.
  - [jQuery, v3.5.1](https://jquery.com/) - Event management and DOM manipulation.
    . Loaded by CDN url. You can easily update the version.
    - We have a webpack commented configuration and a js example if you prefer to load it with webpack. Just uncomment `Expose jQuery` section on the `wepack.common.js` file and `src/index.js`.


### Some custom scss/css helpers:
  - Scss utils. (utils.scss)
  - Scss font face example. (_fonts.scss)
  - A flexbox scss mixin helper. (_flexbox.scss)
  - A missing scss mixin for the placeholder. (_input-placeholder.scss)

### Batch files
For windows we included some batch files inside the folder `bat`. You can create shortcuts to your desktop an click them instead of typing the workflow commands.

## Folder structure
### Needed on Distribution / Live
```
|- /dist
```
Only the contents of the `dist` folder are needed for production.

### Needed for Development / Local
```
*.* (All project's files)
```

## IDE tools, ESLint
This boilerplate comes with these files on root:
- .editorconfig
- .eslintrc.json
- .eslintignore

 Your IDE might need some plugins to be installed in order to recognize those files. You can change the rules/configuration on these files based on your project needs.

Related Links:
- https://editorconfig.org/
- https://eslint.org/docs/user-guide/getting-started#installation-and-usage

## Environments
- Local aka dev.
  - webpack mode: 'development'.
  - _cdnPublicFolder.scss is loaded from './src/common/sass/cdnPublicFolder/dev', "cdnFile" sass mixin and returns: ''.

- Production aka live.
  - webpack mode: 'production'.
  - _cdnPublicFolder.scss is loaded from './src/common/sass/cdnPublicFolder/live', "cdnFile" sass mixin and returns: ''.

Concept:
  1. https://webpack.js.org/concepts/mode/
  2. [CDN public urls on scss](#CDN-public-urls-on-scss)

## CDN public urls on scss
**This might not work. Not tested with webpack 5**
If your website uses CDNs for the images, css might require different urls per
environment. For example an image preloader could have this url on development environment:

```scss
.preloader {
  background: transparent url("/img/ajax-loader.gif") no-repeat center center;
}
```
This on testing and live environment:
```scss
.preloader {
  background: transparent url("/_commonFiles/img/ajax-loader.gif") no-repeat center center;
}
```

For this purpose for each environment we will create a sass mixin `cdnFile` and use that instead of the `url` rule.

```scss
@import "_cdnPublicFolder.scss";

.preloader {
  background: transparent cdnFile("/img/ajax-loader.gif") no-repeat center center;
}
```

Edit these folders/files:
```
|- /src
  |- /sass
    |- /cdnPublicFolder
      |- /dev
        |- _cdnPublicFolder.scss
      |- /live
        |- _cdnPublicFolder.scss
```

`./src/sass/cdnPublicFolder/dev/_cdnPublicFolder.scss` contents:
```scss
// For Development environment.
$commonFileBasePath: '';

@function cdnFile($file) {
  @return url($commonFileBasePath + $file);
}
```

`./src/sass/cdnPublicFolder/live/_cdnPublicFolder.scss` contents:
```scss
// For Live environment.
$commonFileBasePath: '/_commonFiles';

@function cdnFile($file) {
  @return url($commonFileBasePath + $file);
}
```



# UX Seed.

## Basic Starter HTML and LESS


### Introduction

This kit helps you create a design system for an app.  It encourages a CSS and Javascript architecture, and enables you to develop a reusable and maintainable codebase.

This starter kit includes the style files and Javascript files that you will use on the app.

This starter kit is a minimal scaffolding, it's packed with a build system, an application boilerplate and a packages management system.  It contains many layout and structural helpers, utilities, and basic element and module styles that you will build upon. It is really a starting point, an organized set of files.


### Build & Deployment Process

This starter kit includes a build system by which source can be linted, tested and compressed in preparation for production use. For this task, [gulp](http://gulpjs.com/) is used.

#### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp wiredep` to fill bower dependencies in your `.html` file(s)
* `gulp test` to launch your unit tests with Karma
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

### Directory structure

The root directory generated for the app :
<pre>
├──  ux-seed/
│   ├──  app/
│   │   ├──  images/
│   │   ├──  data/
│   │   ├──  scripts/
│   │   │   ├── components/
|   |   |   |   └── scripts for objects/modules
│   │   │   ├── modules/
|   |   |   |   └── scripts for pages/modules of a page
│   │   ├──  styles/
|   |   |   ├── base
|   |   |   |   └── variables, resets, mixins, global assets like fonts
|   |   |   ├── elements
|   |   |   |   └── styles for base elements (p, ul, img etc.)
|   |   |   ├── layout
|   |   |   |   └── grids, widths, utilities, etc.
|   |   |   ├── modules
|   |   |   |   └── styles for objects/modules (.sg-grid etc.)
|   |   |   ├── views
|   |   |   |   └── styles for pages/page modules (.homepage etc.)
|   |   |   └── main.less (the manifest file that pulls in all the partials and compiles into main.css)
│   │   │   ├──  vendor.less (the manifest file that pulls in all the vendor styles and compiles into vendor.css)
│   │   ├──  404.html
│   │   ├──  favicon.ico
│   │   └──  index.html
│   ├──  doc/
│   ├──  gulp/
│   │   ├──  build.js
│   │   ├──  e2e-tests.js
│   │   ├──  server.js
│   │   ├──  unit-tests.js
│   │   ├──  watch.js
│   │   └──  wiredep.js
│   ├──  .bowerrc
│   ├──  .editorconfig
│   ├──  .gitignore
│   ├──  .jshintrc
│   ├──  bower.json
│   ├──  gulpfile.json
│   └──  README.md
</pre>


### Features included in the gulpfile

* *useref* : allow configuration of your files in comments of your HTML file
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *browser sync* : full-featured development web server with livereload and devices sync

## Package managers

Managing third party code and their dependencies should be performed by Package managers. Here a couple of package managers can be found a separate one for the application code (npm) and the code that is parsed by a browser engine (bower).

### Adding packages

To install a package use the following command lines :
```
# registered package
$ bower install  [package_name] -save
# GitHub shorthand
$ bower install desandro/masonry -save
# Git endpoint
$ bower install git://github.com/user/package.git -save
# URL
$ bower install http://example.com/script.js -save

```

### Settings

In some work envirement proxy settings had to be set. Edit the ```.bowerrc ``` and add the following lines :
```
	"strict-ssl": false,

	"proxy":"http://[login]:[password]+@[proxy]",
	"https-proxy":"https://[login]:[password]+@[proxy]""
```







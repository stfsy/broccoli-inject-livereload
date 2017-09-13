# broccoli-inject-livereload

[![Build Status](https://travis-ci.org/stfsy/broccoli-inject-livereload.svg)](https://travis-ci.org/stfsy/broccoli-inject-livereload)
[![Dependency Status](https://img.shields.io/david/stfsy/broccoli-inject-livereload.svg)](https://github.com/stfsy/broccoli-inject-livereload/blob/master/package.json)
[![DevDependency Status](https://img.shields.io/david/dev/stfsy/broccoli-inject-livereload.svg)](https://github.com/stfsy/broccoli-inject-livereload/blob/master/package.json)
[![Npm downloads](https://img.shields.io/npm/dm/broccoli-inject-livereload.svg)](https://www.npmjs.com/package/broccoli-inject-livereload)
[![Npm Version](https://img.shields.io/npm/v/broccoli-inject-livereload.svg)](https://www.npmjs.com/package/broccoli-inject-livereload)
[![Git tag](https://img.shields.io/github/tag/stfsy/broccoli-inject-livereload.svg)](https://github.com/stfsy/broccoli-inject-livereload/releases)
[![Github issues](https://img.shields.io/github/issues/stfsy/broccoli-inject-livereload.svg)](https://github.com/stfsy/broccoli-inject-livereload/issues)
[![License](https://img.shields.io/npm/l/broccoli-inject-livereload.svg)](https://github.com/stfsy/broccoli-inject-livereload/blob/master/LICENSE)

This plugin injects a reference to the livereload script into your HTML files.
Please note that the plugin will only modify files with `.html` extension and simply copy everything else.

## Installation

`npm install broccoli-inject-livereload --save-dev`

## Usage

```javascript
var injectLivereload = require('broccoli-inject-livereload');

var public = injectLivereload('public');

```

## Set custom livereload-port

You can set a custom livereload port via options hash:

```javascript
var injectLivereload = require('broccoli-inject-livereload');

var public = injectLivereload('public', {
  port: 12345
});

```

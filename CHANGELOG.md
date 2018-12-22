<a name="1.2.0"></a>
# [1.2.0](https://github.com/stfsy/broccoli-inject-livereload/compare/v1.1.0...v1.2.0) (2018-12-22)


### Features

* add broccoli 2 compatible plugin implementation ([2872ed3](https://github.com/stfsy/broccoli-inject-livereload/commit/2872ed3))
* update dependencies ([7ca42a6](https://github.com/stfsy/broccoli-inject-livereload/commit/7ca42a6))
* update dependencies ([0149d99](https://github.com/stfsy/broccoli-inject-livereload/commit/0149d99))


### BREAKING CHANGES

* - Port is still configurable, but now has to supplied using a nested livereload
 object
- Configure the target (html) files using the required target property and a
JavaScript Regular Expression

```js
const BroccoliInjectLivereload = require('broccoli-inject-livereload')

const reloadable = new BroccoliInjectLivereload('app', {
    target: 'index.html',
    livereload: {
        port: 12345
       }
    })

module.exports = reloadable
```



<a name="1.1.0"></a>
# [1.1.0](https://github.com/stfsy/broccoli-inject-livereload/compare/v0.1.1...v1.1.0) (2018-12-22)


### Features

* add broccoli 1 compatible plugin implementation ([de3d336](https://github.com/stfsy/broccoli-inject-livereload/commit/de3d336))
* update dependencies ([1d0d691](https://github.com/stfsy/broccoli-inject-livereload/commit/1d0d691))
* update dependencies ([8c6efc0](https://github.com/stfsy/broccoli-inject-livereload/commit/8c6efc0))


### BREAKING CHANGES

* Port is still configurable, but now has to be supplied using a nested livereload object.
Configure the target (html) files using the required target property and a
JavaScript Regular Expression

```js
const BroccoliInjectLivereload = require('broccoli-inject-livereload')

const reloadable = new BroccoliInjectLivereload('app', {
    target: 'index.html',
    livereload: {
        port: 12345
       }
    })

module.exports = reloadable
```



<a name="1.0.0"></a>
# [1.0.0](https://github.com/stfsy/broccoli-inject-livereload/compare/v0.1.1...v1.0.0) (2017-09-26)


### Features

* add broccoli 1 compatible plugin implementation ([de3d336](https://github.com/stfsy/broccoli-inject-livereload/commit/de3d336))


### BREAKING CHANGES

* Port is still configurable, but now has to be supplied using a nested livereload object.
Configure the target (html) files using the required target property and a
JavaScript Regular Expression

```js
const BroccoliInjectLivereload = require('broccoli-inject-livereload')

const reloadable = new BroccoliInjectLivereload('app', {
    target: 'index.html',
    livereload: {
        port: 12345
       }
    })

module.exports = reloadable
```




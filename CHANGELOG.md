<a name="1.0.0"></a>
# [1.0.0](https://github.com/stfsy/broccoli-inject-livereload/compare/v0.1.1...v1.0.0) (2017-09-26)


### Features

* add broccoli 2 compatible plugin implementation ([2872ed3](https://github.com/stfsy/broccoli-inject-livereload/commit/2872ed3))


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




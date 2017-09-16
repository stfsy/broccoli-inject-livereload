'use strict'

const BroccoliFilter = require('broccoli-filter')

const tag = require('./tag')
const Injector = require('./injector')

class BroccoliInjectLivereload extends BroccoliFilter {

    constructor(inputNodes, options) {
        super(inputNodes, options)

        this.inputEncoding = null
        this.outputEncoding = null

        this._building = process.argv.indexOf('build') > 0        
        
        this._livereloadPort = options.livereload && options.livereload.port || 35729
        this._injector = new Injector(options.target, tag(this._livereloadPort))
    }
 
    processString(contents, path) {

        if (this._building) {
            return contents
        }

        const inject = this._injector.matches(path)

        if (inject) {
            return this._injector.inject(contents)
        } else {
            return contents
        }
    }
}

module.exports = BroccoliInjectLivereload
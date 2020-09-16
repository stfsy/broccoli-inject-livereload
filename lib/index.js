'use strict'

const BroccoliPluginAdapter = require('broccoli-plugin-adapter')

const tag = require('./tag')
const Injector = require('./injector')

class BroccoliInjectLivereload extends BroccoliPluginAdapter {

    constructor(inputNodes, options) {
        super(inputNodes, options)

        this._building = process.argv.find(element => element === 'b' || element === 'build')
                
        this._livereloadPort = options.livereload && options.livereload.port || 35729
        this._injector = new Injector(options.target, tag(this._livereloadPort))
    }

    handleContent(path, content) {
        if (this._building) {
            return content
        }

        const inject = this._injector.matches(path)

        if (inject) {
            return this._injector.inject(content)
        } else {
            return content
        }
    }
}

module.exports = BroccoliInjectLivereload
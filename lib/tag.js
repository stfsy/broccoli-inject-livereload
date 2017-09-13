'use strict'

const Node = require('node-html-light').Node
const Text = require('node-html-light').Text

module.exports = (port) => {

    const textNode = Text.of([
        'document.write(\'', '<script ',
        'src="http://\' + (location.host || "localhost").split(":")[0] + \':',
        port, '/livereload.js?snipver=1">',
        '<\\/script>\')'].join('')
    )

    const scriptTag = Node.fromString('<script></script>')
    scriptTag.appendChild(textNode)
    return scriptTag
}
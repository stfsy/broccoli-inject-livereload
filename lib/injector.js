'use strict'

const Document = require('node-html-light').Document
const Node = require('node-html-light').Node

const toBuffer = require('./toBuffer')

class Injector {

    constructor(targets, tag) {
        this._targets = new RegExp(targets)
        this._tag = tag
    }

    matches(path) {
        return this._targets.test(path)
    }

    inject(contents) {
        const document = Document.fromString(contents.toString('utf-8'))
        this._getOrAppendHeader(document).appendChild(this._tag)

        return toBuffer(document.toHtml() + '')
    }

    _getOrAppendHeader(document) {
        let head = document.head()

        if (!head) {
            document.html().appendChild(Node.of('head'))
            head = document.head()
        }

        return head
    }
}

module.exports = Injector
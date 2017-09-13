'use strict'

const version = process.versions.node.split('.')

// Buffer.from(string) is available for node >= 5.1
let useBufferFrom = false

// we're fine if we're running on node >= 6
if (version[0] >= 6) {
    useBufferFrom = true
}

// if we're running on node 5 something, we have to check the minor version
if (version[0] == 5) {
    // minor version
    if (version[1] >= 1) {
        useBufferFrom = true
    }
}

module.exports = function (string) {

    if (useBufferFrom) {
        return Buffer.from(string)
    } else {
        return new Buffer(string)
    }
}
'use strict'

const Reload = require('../../lib/index')

const reloadable = new Reload(['app'], {
    target: 'test.html',
    trackInputChanges: true
})

module.exports = reloadable
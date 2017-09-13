'use strict'

const BroccoliInjectLivereload = require('../../lib/index')

const expect = require('chai').expect
const resolve = require('path').resolve

describe('BroccoliInjectLivereload', () => {

    it('is a constructor', () => {
        typeof BroccoliInjectLivereload == 'function'
    })
})
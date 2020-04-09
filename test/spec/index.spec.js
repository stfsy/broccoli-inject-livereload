'use strict'

const BroccoliInjectLivereload = require('../../lib/index')

const expect = require('chai').expect
const resolve = require('path').resolve

const tag = require(resolve('lib/tag'))
const Injector = require(resolve('lib/injector'))

describe('BroccoliInjectLivereload', () => {

    it('is a constructor', () => {
        typeof BroccoliInjectLivereload == 'function'
    })
    
    // calling processString with a fake context
    describe('.processString', () => {

        let mockModuleContext = null
        let htmlString = null

        beforeEach(() => {
            mockModuleContext = {
                _building: false,
                _injector: new Injector('^index.html$', tag('123456'))
            }
            htmlString = '<html><head></head><body></body></html>'
        })

        it('returns content unchanged', () => {
            mockModuleContext._building = true
            const buffer = BroccoliInjectLivereload.prototype.handleContent.call(mockModuleContext, 'index.html', new Buffer(htmlString))
            expect(buffer.toString('utf-8')).to.equal(htmlString)
        })

        it('adds the livereload tag', () => {
            const buffer = BroccoliInjectLivereload.prototype.handleContent.call(mockModuleContext, 'index.html', new Buffer(htmlString))
            expect(buffer.toString('utf-8')).not.to.equal(htmlString)
            expect(buffer.toString('utf-8')).to.contain('livereload.js')
            expect(buffer.toString('utf-8')).to.contain('123456')
        })

        it('does not add the livereload tag', () => {
            const buffer = BroccoliInjectLivereload.prototype.handleContent.call(mockModuleContext, 'dex.html', new Buffer(htmlString))
            expect(buffer.toString('utf-8')).to.equal(htmlString)            
        })
    })
})
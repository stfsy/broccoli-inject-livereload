'use strict'

const resolve = require('path').resolve
const expect = require('chai').expect

const Node = require('node-html-light').Node
const Injector = require(resolve('lib/injector'))

describe('Injector', () => {

    let injector = null
    let injectedHtmlString = '<div id="test-div"></div>'

    beforeEach(() => {
        injector = new Injector(/index[-0-9a-z]*.html/, Node.fromString(injectedHtmlString))
    })

    describe('.matches regex ', () => {
        beforeEach(() => {
            injector = new Injector(/index[-0-9a-z]*.html/, Node.fromString(injectedHtmlString))
        })
        it('index.html', () => {
            const matches = injector.matches('index.html')
            expect(matches).to.be.true
        })

        it('index-abc.html', () => {
            const matches = injector.matches('index-abc.html')
            expect(matches).to.be.true
        })

        it('index-a2b3c.html', () => {
            const matches = injector.matches('index-a2b3c.html')
            expect(matches).to.be.true
        })

        it('does no match', () => {
            const matches = injector.matches('file.html')
            expect(matches).to.be.false
        })
    })
    describe('.matches string', () => {
        beforeEach(() => {
            injector = new Injector('index[-0-9a-z]*.html', Node.fromString(injectedHtmlString))
        })
        it('index.html', () => {
            const matches = injector.matches('index.html')
            expect(matches).to.be.true
        })

        it('index-abc.html', () => {
            const matches = injector.matches('index-abc.html')
            expect(matches).to.be.true
        })
        it('index-a2b3c.html', () => {
            const matches = injector.matches('index-a2b3c.html')
            expect(matches).to.be.true
        })

        it('does no match', () => {
            const matches = injector.matches('file.html')
            expect(matches).to.be.false
        })
    })
    describe('.inject', () => {
        it('adds the livereload script', () => {
            const html = `
            <html>
            <head></head>
            <body></body>
            </html>
        `
            const htmlWithLiveReload = injector.inject(html).toString('utf-8')
            expect(htmlWithLiveReload.indexOf('<div id="test-div"></div>')).to.be.greaterThan(-1)
        })
        it('adds a head tag and the livereload script', () => {
            const html = `
            <html>
            <body></body>
            </html>
        `
            const htmlWithLiveReload = injector.inject(html).toString('utf-8')
            expect(htmlWithLiveReload.indexOf('<head>')).to.be.greaterThan(-1)
            expect(htmlWithLiveReload.indexOf('<div id="test-div"></div>')).to.be.greaterThan(-1)
        })
    })
})
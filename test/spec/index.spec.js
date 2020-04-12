'use strict'

const BroccoliTestRunner = require('broccoli-test-runner')
const runner = new BroccoliTestRunner('test/fixtures')

const expect = require('chai').expect
const puppeteer = require('puppeteer')

describe('BroccoliInjectLivereload', () => {
    let page = null
    before(() => {
        return runner.serve()
            .then(() => puppeteer.launch({ headless: true }))
            .then(browser => browser.newPage())
            .then(p => page = p)
    })
    after(() => {
        return runner.stop()
            .then(() => page.browser().close())
    })
    it('should inject livereload tag into test.html', () => {
        return page.goto('http://localhost:4200/test.html')
            .then(() => {
                return page.evaluate(() => document.querySelector("script").textContent)
            }).then((text) => {
                expect(text).to.contain("livereload.js")
            })
    })
    it('should NOT inject livereload tag into index.html', () => {
        return page.goto('http://localhost:4200/index.html')
            .then(() => {
                return page.evaluate(() => document.querySelector("script"))
            }).then((text) => {
                expect(text).to.be.null
            })
    })
})
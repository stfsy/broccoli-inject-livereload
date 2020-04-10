'use strict'

const BroccoliInjectLivereload = require('../../lib/index')

const expect = require('chai').expect
const puppeteer = require('puppeteer')

describe('BroccoliInjectLivereload', () => {
    let browser = null
    let page = null

    before(() => {
        return puppeteer.launch({ headless: true }).then((b) => {
            browser = b
            return browser.newPage()
        }).then((p) => {
            page = p
        })
    })

    it('should inject livereload tag into test.html', () => {
        return page.goto('http://localhost:4200/test.html')
            .then(() => {
                return page.evaluate(() => {
                    return document.querySelector("script").textContent;
                })
            }).then((text) => {
                expect(text).to.contain("livereload.js")
            })
    })

    it('should NOT inject livereload tag into index.html', () => {
        return page.goto('http://localhost:4200/index.html')
            .then(() => {
                return page.evaluate(() => {
                    return document.querySelector("script");
                })
            }).then((text) => {
                expect(text).to.be.null
            })
    })
})
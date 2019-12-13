//mport * as assert from 'assert';
const chai = require("chai");
const expect = chai.expect
const assert = chai.assert


describe('Website', function(){
    it('should be alive', function(){
        browser.url('/')
        const img = $('img[src$="images/logotype.png"]')

        if(!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed');
                    }
    
    })
    
    it.only('cheking assertions', function () {
        try {
            assert(false)
        } catch (err) {
            console.dir(err)
        }
        })
    })

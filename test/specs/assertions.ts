import * as assert from 'assert';

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

//import { isMainThread } from "worker_threads"

describe('Website', function () {
    it('should be alive', function () {
        browser.url('/')
        // browser.url('http://ip-5236.sunline.net.ua:38015/')
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
        
       if(!img.isExisting()){
           throw new Error('Website should be opened');
       }
        browser.pause(500)
    })

/*    it('test', function(){
    browser.url('/')

    const popularProducts = $$('#box-popular-products .product')

    popularProducts[2].$('.name')

    $('=Change').click()

    $('=Purple Duck').$('../..') //2 levels up from Purple Duck
    }
    )
    */
})
describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`)
        const img = $('img[src$="images/logotype.png"]')

        
        if(!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed');
        }
    })

    it('test', function () {
        browser.url(`/`)

        const popularProducts = $$('#box-popular-products .product')

        popularProducts[2].$('.name')


        $('=Change').click()

        $('=Purple Duck').$('../..') // find element 2 levels up from Purple Duck
    })
})

/*describe('Website', function () {
    it('should be alive', function () {
        browser.url('/')
        // browser.url('http://ip-5236.sunline.net.ua:38015/')
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
        
       if(!img.isExisting()){
           throw new Error('Website should be opened');
       }
        browser.pause(500)
    })


})*/
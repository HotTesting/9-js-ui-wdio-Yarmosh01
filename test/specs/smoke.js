

describe('Website', function () {
    it('should be alive', function () {
        browser.url('/')

        const img = $('img[src = "/assets/images/svg/logo.svg"]')
       // browser.pause(10000)
        expect(img.isExisting(), 'website is opened, image exists on the page');
    });
});
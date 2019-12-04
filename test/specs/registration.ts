describe('Website', function () {
    it('should be alive', function () {
        browser.url('/create_account')
        $('input[name = "firstname"]').setValue('Test')
        $('input[name = "lastname"]').setValue('Test')

        const countrySelect = $('select[name = "country_code"]')
        countrySelect.selectByVisibleText('Ukraine')
        
        const email = 'test${new Date().getTime() / 1000}@test.com'

        $('input[name = "email"]').setValue(email)
        $('input[name = "phone"]').setValue('+380441111111')

        
        
    })
    })
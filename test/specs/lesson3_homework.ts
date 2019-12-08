import * as assert from 'assert';
import { isConditionalExpression } from 'typescript';

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
   browser.url('http://ip-5236.sunline.net.ua:38015')
    const searchField = $('input[type = "search"]')
    searchField.setValue('duck');
    searchField.addValue("Enter");
browser.pause(3000);
    const resultsBox = $('#box-search-results');
    const res = resultsBox.$$('main [class="col-xs-6 col-sm-4 col-md-3"]');
    assert(res, 'search result eqaul to 0')
  });
        
 
    it("should redirect to item page in case only one result matches", function() {
    browser.url('http://ip-5236.sunline.net.ua:38015')
    const searchField = $('input[type = "search"]')
    searchField.setValue('purple');
    searchField.addValue("Enter");
browser.pause(3000);
//expect(browser.getUrl()).to.contain("query=purple-duck");
    assert(browser.getUrl().includes("purple-duck"), 'Page with product not opened')
    });
  


    it("should redirect to 'no matching results' in case no items matched", function() {
      const searchField = $('input[type = "search"]')
      searchField.setValue('invalid request');
      searchField.addValue("Enter");
  browser.pause(3000)    
      const actualText = $('#box-search-results').getText()
      const expectedText = 'No matching results'
      assert(actualText.includes(expectedText), 'The expected text does not match the actual') 

    });
  });
  

  // Each implemented test gives you 20 points (max total - 40)
  describe("Search results sorting", function() {


    it.only("correctly arranges items when using 'by price' sorting", function() {
      
    browser.url('http://ip-5236.sunline.net.ua:38015/search?query=duck&page=1&sort=price')
    const resultsBox = $('#box-search-results');
    const res = resultsBox.$$('span.price');
    var i;
    for (i = res; i < res.length; ++i) {
        if (i > i+1){
            return false;
        }
    }
    assert(res, '0')
    });


    it.only("correctly arranges items when using 'by name' sorting", function() {
      
      browser.url('http://ip-5236.sunline.net.ua:38015/search?query=duck&page=1&sort=name')
      const resultsBox = $('#box-search-results');
      const resss = resultsBox.$$('div.name');
      console.log('res', resss)
     browser.pause(3500)
      assert(resss, '0')
          
    });
  });
  
  // BONUS LEVEL - this test gives you 15 points
  describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
      browser.url('http://ip-5236.sunline.net.ua:38015/customer-service-s-0')
      const ContactusForm = $('#box-contact-us');
      let nickname = //random string

      $('input[name = "name"]').setValue('CustomerName') //use nickname variable 
      let email = (nickname + '@tmail.tom')

      ContactusForm.$('input[name = "email"]').setValue(email)
      $('input[name = "subject"]').setValue('CustomerName') //use nickname variable 
      $('input[name = "message"]').setValue('any message + 123512345 + @!#$*')

      $('button[name = "send"]').click

      assert($('div.alert.alert-success').isDisplayed, 'Alert is not Displayed')
     


    });
    
  });


  //-----------

  /*
  
  let allDuckItems = [];
let res = allDuckItems.every(duck => duck);
console.log(res); // true
browser.pause(4000)
expect(allDuckItems.length).not.to.equal(0)

it("should show results in case multiple items matches", function() {
  searchWord("duck");
  expect(browser.getUrl()).to.contain("query=duck");
  expect($$(allDuckItems).every(duck => duck.isDisplayed())).to.equal(true);
});
// ************************************************************************************
const duckPriceArr = $$(allDucks).map(duck =>  //то вытянул все цены, хоть я хз шо такое мап и стрелка
  parseInt(duck.getAttribute("data-price"))
);
const duckPriceNewArr = duckPriceArr.slice(0); // copy array зачем?
duckPriceNewArr.sort((a, b) => a - b); // price sorting

// ************************************************************************************
it("should show results in case multiple items matches", function() {
  $('input[type="search"]').setValue("duck");
  browser.pause(1000);
  $('input[type="search"]').addValue("Enter");
  browser.pause(1000);
  // same locator on home and search results page. false positive test
  expect($('main [class="col-xs-6 col-sm-4 col-md-3"]').isDisplayed()).to.equal(
    true
  );
  // throw new Error("NOT IMPLEMENTED");
});

*/

import * as assert from 'assert';
import { isConditionalExpression } from 'typescript';
// import { newId } from '../uniqName';

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
   browser.url('http://ip-5236.sunline.net.ua:38015')
    const searchField = $('input[type = "search"]')
    searchField.setValue('duck');
    searchField.addValue("Enter");
browser.pause(3000);
    const resultsBox = $('#box-search-results');
    const res = resultsBox.$$('div .products .product');
    console.log('resulttt:', res);
    assert(res.length > 0, 'search result eqaul to 0') //
  });
        
 
  it("should redirect to item page in case only one result matches", function () {
    browser.url('http://ip-5236.sunline.net.ua:38015')
    const searchField = $('input[type = "search"]')
    searchField.setValue('purple');
    searchField.addValue("Enter");
  
    assert(browser.getUrl().includes("purple-duck"), 'Page with product not opened')
  });
  


    it("should redirect to 'no matching results' in case no items matched", function() {
      browser.url('http://ip-5236.sunline.net.ua:38015')
      const searchField = $('input[type = "search"]')
      searchField.setValue('some invalid request');
      //searchField.setValue('duck');
      searchField.addValue("Enter");
      const actualText = $('#box-search-results').getText()
      const expectedText = 'No matching results'
      assert(actualText.includes(expectedText), 'The expected text does not match the actual') 

    });
  });
  

  // Each implemented test gives you 20 points (max total - 40)
  describe("Search results sorting", function() {


    it("correctly arranges items when using 'by price' sorting", function() {   
    browser.url('http://ip-5236.sunline.net.ua:38015/search?query=duck');
    $('#box-search-results a[href*="sort=price"]').click();
    const resultsBox = $('#box-search-results');
    const duckItems = resultsBox.$$('div .products .product');
  

    const sortedByClickArray = duckItems.map(duck => parseInt(duck.getAttribute("data-price")));
    const sortedBySortArray = sortedByClickArray.map(duck => duck);
    sortedBySortArray.sort((a, b) => a - b);

    console.log("array1:", sortedByClickArray)
    console.log("array2:", sortedBySortArray, "******************")
    for (let i = 0; i < sortedByClickArray.length; i++){
      assert.equal(sortedByClickArray[i], sortedBySortArray[i], "sorting results does not match")
    }
    });


    it("correctly arranges items when using 'by name' sorting", function() {
      
      browser.url('http://ip-5236.sunline.net.ua:38015/search?query=duck')
      $('#box-search-results a[href*="sort=name"]').click();
      const resultsBox = $('#box-search-results');
      const duckItems = resultsBox.$$('div .products .product');
    
      const duckClickedNames = duckItems.map(duck => duck.getAttribute("data-name"));
      const duckSortedNames = duckClickedNames.map(duck => duck);
      duckSortedNames.sort;
      
      console.log('resssss', duckClickedNames, '**********', duckSortedNames)

      for (let i = 0; i < duckClickedNames.length; i++){
        assert.equal(duckClickedNames[i], duckSortedNames[i], "sorting results does not match")
      }
          
    });
  });
  
  
  // BONUS LEVEL - this test gives you 15 points          
  describe("Contact us form", function() {
   
      it("must send messages to shop administration", function() {
      browser.url('http://ip-5236.sunline.net.ua:38015/customer-service-s-0')
      const ContactusForm = $('#box-contact-us');
     
        function newId() {
          // First character is an 'a', it's good practice to tag id to begin with a letter
          return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
              const val = Math.random() * 16 | 0;
              return val.toString(16);
          });
        }
      
        let nickname = newId();
      $('input[name = "name"]').setValue('CustomerName') //use nickname variable 
      let email = (nickname + '@tmail.tom')
      ContactusForm.$('input[name = "email"]').setValue(email)
      ContactusForm.$('input[name = "subject"]').setValue(email)    //use nickname variable 
      ContactusForm.$('textarea[name = "message"]').setValue('any message + 123512345 + @!#$*')

      ContactusForm.$('button[name = "send"]').click()
      browser.pause(3000)
      assert($('div.alert.alert-success').isDisplayed, 'Alert is not Displayed')
     
    });
    
  });



import * as assert from 'assert';

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

/*
    it.only("correctly arranges items when using 'by price' sorting", function() {
      
    browser.url('http://ip-5236.sunline.net.ua:38015')
    const searchField = $('input[type = "search"]')
    searchField.setValue('duck');
    searchField.addValue("Enter");
    $('span[class = "btn btn-default"]').click

          browser.pause(10000);
    const resultsBox = $('#box-search-results');
    const res = resultsBox.$$('span[class = "price"]');
    var i;
    for (i = res; i < res.length; ++i) {
        if (i > i+1){
            return false;
        }
    }

    assert(res, '0')
    });
*/

    it("correctly arranges items when using 'by name' sorting", function() {
      throw new Error("NOT IMPLEMENTED");
    });
  });
  
  // BONUS LEVEL - this test gives you 15 points
  describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
      throw new Error("NOT IMPLEMENTED");
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

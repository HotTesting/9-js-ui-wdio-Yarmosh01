

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
    const searchField = $('input[type = "search"]')
    searchField.setValue('duck');
     browser.keys(['Meta', 'uE007'])
     browser.pause(5000)

      throw new Error("NOT IMPLEMENTED");

    });
  

    /*
    it("should redirect to item page in case only one result matches", function() {
      throw new Error("NOT IMPLEMENTED");
    });
  
    it("should redirect to 'no matching results' in case no items matched", function() {
      throw new Error("NOT IMPLEMENTED");
    });
  });
  
  // Each implemented test gives you 20 points (max total - 40)
  describe("Search results sorting", function() {
    it("correctly arranges items when using 'by price' sorting", function() {
      throw new Error("NOT IMPLEMENTED");
    });
  
    it("correctly arranges items when using 'by name' sorting", function() {
      throw new Error("NOT IMPLEMENTED");
    });
  });
  
  // BONUS LEVEL - this test gives you 15 points
  describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
      throw new Error("NOT IMPLEMENTED");
    });
    */
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
const duckPriceArr = $$(allDucks).map(duck =>
  parseInt(duck.getAttribute("data-price"))
);
const duckPriceNewArr = duckPriceArr.slice(0); // copy array
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

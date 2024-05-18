import {And ,Given , Then ,When } from "cypress-cucumber-preprocessor/steps";


Given(/^user login to the site with user "([^"]*)"$/, function(user) {
    cy.fixture("testdata.json").then((data) =>{
        cy.get("[placeholder='Username']").type(data[user]["username"])
        cy.get("[placeholder='Password']").type(data[user]["password"])
        cy.get("#login-button").click();
        cy.get("[data-test='title']").should("contain","Products");
    })
});





And(/^User add the three products to cart$/, function(dataTable) {
    dataTable.hashes() .forEach((elem)=>{
        let product=elem.producttitle
         cy. log (product);
         cy.get('.inventory_item_description').each(($el, index,$list) =>{
            var text= $el.find( 'div a div' ).text();
            cy. log("test is "+text);
            if (text.includes (product))
 {
   $el.find('.pricebar button').click();
 }
})
})
})


Then(/^User checkout from the cart/, function() {
 cy.get("#shopping_cart_container a").click()
 cy.get('#checkout', {timeout: 10000}).click()
})


Given(/^User enters the form$/, function() {
     cy.get("#first-name").type("sayooj" ) 
     cy.get("#last-name").type("s")
      cy.get("#postal-code").type("11223"); 
      cy.get("#continue") .click();
       cy.get('#finish', {timeout: 10000}).click(); 
})
       
Then (/^User validates checkout page$/, function() {
    
    cy.get('#checkout_complete_container h2').should("contain", "Thank you for your order!")

})



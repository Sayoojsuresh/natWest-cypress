import {And ,Given , Then ,When } from "cypress-cucumber-preprocessor/steps"

Given(/^User visits the website$/,function()
{
    cy.visit('https://www.saucedemo.com/'); 
   // cy.visit('https://www.google.com/'); 
});

Given(/^User clear all cookies$/,function()
{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage(); 
 
});




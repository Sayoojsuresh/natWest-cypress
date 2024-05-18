Feature: Login Page Validations

Background:
    Given User visits the website
    And User clear all cookies


Scenario Outline: Login to the site with different User
    Given user login to the site with user "standardUser"
    And User add the three products to cart
    |producttitle|
    |Sauce Labs Backpack|
    |Sauce Labs Bike Light|
    |Sauce Labs Bolt T-shirt|
    Then User checkout from the cart
    Given User enters the form
    And User validates checkout page

    Examples:
    |User|
    |standardUser|
    |performanceGlitchUser|



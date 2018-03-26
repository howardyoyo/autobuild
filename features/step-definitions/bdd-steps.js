const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const assert = require('assert');
const jquery = require('jquery');

const jsdom = require("jsdom");

//no window with a document exists in node, so has to be mocked by jsdom.


//1) Scenario: Add an item # features/bdd-cucumber-tests.feature:25
  
         Given('Textbox is visible', function () {
         });

         Given('Add button is visible', function () {
         });

         When('User enters text into Textbox', function () {
         });

         When('left clicks on Add item button', function () {
         });
         Then('Text entered into textbox is now added to bottom of list', function () {
         });

         Then('textbox is now empty', function () {
         });



//2) Scenario: The right things happening when pressing Add with an empty field (error message, nothing added to the list) # features/bdd-cucumber-tests.feature:40
 
         Given('Webpage is ready', function () {;
         });

         When('textbox is empty', function () {
           // Write code here that turns the phrase above into concrete actions
      
         });

         When('User left clicks on Add item button', function () {
           // Write code here that turns the phrase above into concrete actions
        
         });

         Then('error message appears telling user to write something', function () {
           // Write code here that turns the phrase above into concrete actions
         });

         Then('list contents stay the same', function () {
           // Write code here that turns the phrase above into concrete actions
         });
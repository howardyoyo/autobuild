const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const assert = require('assert');

const defineSupportCode = require('cucumber').defineSupportCode;


//1) Scenario: Add an item # features/bdd-cucumber-tests.feature:25
         Given('Webpage has loaded', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Given('Textbox entry is visible', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Given('Add button is visible', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         When('User enters text into Textbox', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         When('left clicks on Add item button', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Then('Text entered into textbox is now added to bottom of list', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Then('textbox is now empty', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });


//2) Scenario: Retain added items after page reload/close # features/bdd-cucumber-tests.feature:34

         Given('Webpage has loaded', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Given('there are items on the todo list', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         When('close/reload the webpage', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Then('All previous items listed should still be there', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });


//3) Scenario: The right things happening when pressing Add with an empty field (error message, nothing added to the list) # features/bdd-cucumber-tests.feature:40
 
         Given('Webpage has loaded', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         When('textbox is empty', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         When('User left clicks on Add item button', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Then('error message appears telling user to write something', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

         Then('list contents stay the same', function (callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });
'use strict'; // necessary for es6 output in node

import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { AppPage } from './app.po';
import { promise } from 'selenium-webdriver';


describe('angularjs homepage todo list', () => {
  xit('should add a todo', () => {
    browser.get('https://angularjs.org');
    browser.waitForAngular();

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    const completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});

fdescribe('Protractor Demo App', () => {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  const latestResult = element(by.binding('latest'));

  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function () {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    goButton.click();
    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function () {
    // Fill this in.
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
    goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', function () {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});

fdescribe('Protractor Demo App', function () {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  const latestResult = element(by.binding('latest'));
  const history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function () {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);
    expect(history.last().getText()).toContain('1 + 2');

    add(5, 6);

    expect(history.count()).toEqual(3);
  });
});



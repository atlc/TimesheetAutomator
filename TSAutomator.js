// ==UserScript==
// @name         TSAutomator.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ssb-prod.ec.accs.edu/PROD/JSCC/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let firstEmptyDate = document.querySelector("a[class='fieldsmalltext']");
    let hoursTextField = document.getElementById('hours_id');
    let saveHoursButton = document.querySelector("input[value='Save']");
    let nextButton = document.querySelector("input[value='Next']");
    let regularHoursRow = [...document.getElementsByClassName('bordertable')][0].firstElementChild.children[1];

    if (firstEmptyDate) {
        if (regularHoursRow.querySelectorAll("a[class='fieldsmalltext']")[0] == firstEmptyDate) {
            firstEmptyDate.click();
            if ((regularHoursRow.children[5].firstChild.firstChild == firstEmptyDate) || (regularHoursRow.children[6].firstChild.firstChild == firstEmptyDate) || (regularHoursRow.children[7].firstChild.firstChild == firstEmptyDate)) {
                (hoursTextField && hoursTextField.value == "") ? setHoursTo(5) : firstEmptyDate.click();
            } else if (regularHoursRow.children[8].firstChild.firstChild == firstEmptyDate) {
                (hoursTextField && hoursTextField.value == "") ? setHoursTo(4) : firstEmptyDate.click();
            } else {
                (hoursTextField && hoursTextField.value == "") ? setHoursTo(0) : firstEmptyDate.click();
            }
        } else {
            (hoursTextField && hoursTextField.value == "") ? setHoursTo(0) : firstEmptyDate.click();
        }
    } else {
        nextButton ? nextButton.click() : console.log('Verify your hours, ding-dong');
    }


    function setHoursTo(hours) {
        hoursTextField.value = hours;
        saveHoursButton.click();
    }
})();

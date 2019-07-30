// ==UserScript==
// @name         Timesheet Automator
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

    if (firstEmptyDate) {
        firstEmptyDate.click();
        (hoursTextField && hoursTextField.value == "") ? setHoursTo(0) : firstEmptyDate.click();
    } else {
        nextButton ? nextButton.click() : alert('Go ahead and fill out your hours, doofus');
    }

    function setHoursTo(hours) {
        hoursTextField.value = hours;
        saveHoursButton.click();
    }
})();

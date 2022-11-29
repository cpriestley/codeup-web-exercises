"use strict";
(function () {
    let response;

    function promptForNumberBetween(min, max) {
        let val = 0;
        while (true) {
            response = parseInt(prompt('Please enter a number between 1 and 50'));
            if (!isNaN(response)) {
                val =   response;
            }
            if (val >= min && val <= max) {
                break;
            }
        }
    }

    function printWithoutUserNumber(min, max) {
        for (let i = 1; i < max + 1; i++) {
            if (i === parseInt(response)) {
                console.log(`Yikes! Skipping number: ${i}`);
                continue;
            }
            if( i % 2 !== 0 ) {
                console.log(`Here is an odd number ${i}`);
            }
        }
    }

    const min = 1;
    const max = 50;
    promptForNumberBetween(min, max);
    console.log(`Number to skip is ${response}\n`);
    printWithoutUserNumber(min, max);
}())
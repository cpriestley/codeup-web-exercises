(function () {
    "use strict";
    function showMultiplicationTable(num) {
        for (let i = 0; i < 10;     ) {
            console.log(`${num} * ${++i} = ${parseInt(i) * num}`);
        }
    }

    function generate10RandomNumbers(min, max) {
        for (let i = 0; i < 10; i++) {
            let rand = Math.floor(Math.random() * (max - min + 1) + min);
            console.log(`${rand} is ${rand % 2 === 0 ? 'even': 'odd'}`)
        }
    }
    
    function printRightTriangle() {
        for (let i = 1; i < 10; i++) {
            console.log(i.toString().repeat(i));
        }
    }

    function multiplesOf5Descending (start) {
        const step = -5;
        for (let i = start; i > 0; i+=step) {
            console.log(i);
        }
    }

    const min = 20;
    const max = 200;

    generate10RandomNumbers(min, max);
    printRightTriangle();

    const start = 100;
    multiplesOf5Descending(start);

}())
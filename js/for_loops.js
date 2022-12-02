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

    generate10RandomNumbers(20, 200);
    printRightTriangle();

    multiplesOf5Descending(100);

}())
const EMPTY_STRING = '';

(function () {
    "use strict";

    // Print the first 16 powers of 2
    printPowers(2, 26);

    // Print sold ice cream cones
    printSoldIceCreamCones(getRandomBetween(50, 100));

    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getPlurality(numberOfThem) {
        if (numberOfThem === 1) {
            return EMPTY_STRING;
        }
        return 's';
    }

    function printPowers(base, lastPower) {
        let current_power = 1;
        while(current_power < lastPower) {
            console.log(base ** current_power); //or Math.pow(base, current_power)
            current_power++;
        }
    }

    function printSoldIceCreamCones(inventory) {
        console.log(`I have ${inventory} cones to sell`);
        do {
            let conesSold = getRandomBetween(1, 5);
            if (conesSold <= inventory) {
                let _s = getPlurality(conesSold)
                console.log(`${conesSold} cone${_s} sold...`);
                inventory -= conesSold;
            }
        } while (inventory > 0);
        console.log('Yay! I sold them all!');
    }

}())
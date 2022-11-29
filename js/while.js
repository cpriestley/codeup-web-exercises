(function () {
   "use strict";
   let i = 0;

   // Print the first 16 powers of 2
   while(i < 16) {
       console.log(2 ** ++i);
   }

   // Print sold ice cream cones
   const MAX = 100;
   const MIN = 50;
   let coneInventory = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
   console.log(`I have ${coneInventory} cones to sell`);
   do {
       let max=5;
       let min=1;
       let conesSold = Math.floor(Math.random() * (max - min + 1) + min);
       if (conesSold <= coneInventory) {
           console.log(`${conesSold} cone${conesSold === 1 ? '' : 's'} sold...`);
           coneInventory -= conesSold;
       }
   } while (coneInventory > 0);

    console.log('Yay! I sold them all!')
}())
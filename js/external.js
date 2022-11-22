"use strict";
alert("Welcome to my Website!");
const color = prompt("What's your favorite color?");
alert(`Great, ${color} is my favorite color too!`);

// Movie Rental exercies
let movieMap = new Map();
alert("You are renting 3 movies.\n'Little Mermaid', 'Brother Bear' and 'Hercules'.");
alert("Answer the following prompts to see how much you will pay.");
movieMap.set("Little Mermaid",
    prompt("How long would you like to keep 'Little Mermaid'?","0"));
movieMap.set("Brother Bear",
    prompt("How long would you like to keep 'Brother Bear'?","0"));
movieMap.set("Hercules",
    prompt("How long would you like to keep 'Hercules'?","0"));

let sum = 0;
let price = prompt("What is the price per day?","3");
movieMap.forEach(val => sum += (val * price));

alert(`Awesome! You are renting 
-- 'Little Mermaid' for ${movieMap.get("Little Mermaid")} day(s), 
-- 'Brother Bear' for ${movieMap.get("Brother Bear")} day(s) and 
-- 'Hercules for ${movieMap.get("Hercules")} day(s).\n\nAt $${price} per day your total price is $${sum}.`);
"use strict";
alert("Welcome to my Website!");
const color = prompt("What's your favorite color?");
alert(`Great, ${color} is my favorite color too!`);

// Movie Rental exercise
let movieMap = new Map();
let movies = ['Little Mermaid', 'Brother Bear', 'Hercules'];
alert(`You are renting 3 movies.\n'${movies[0]}', '${movies[1]}' and '${movies[2]}'.`);
alert("Answer the following prompts to see how much you will pay.");
movieMap.set(`${movies[0]}`,
    prompt(`How long would you like to keep '${movies[0]}'?`,"0"));
movieMap.set(`${movies[1]}`,
    prompt(`How long would you like to keep '${movies[1]}'?`,"0"));
movieMap.set(`${movies[2]}`,
    prompt(`How long would you like to keep '${movies[2]}'?`,"0"));

let sum = 0;
let price = prompt("What is the price per day?","3");
movieMap.forEach(val => sum += (val * price));

alert(`Awesome! You are renting 
-- '${movies[0]}' for ${movieMap.get(movies[0])} day(s), 
-- '${movies[1]}' for ${movieMap.get(movies[1])} day(s) and 
-- '${movies[2]}' for ${movieMap.get(movies[2])} day(s).\n\nAt $${price} per day your total price is $${sum}.`);
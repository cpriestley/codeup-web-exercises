(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['edgardo', 'clayton', 'christina', 'billie'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    let p = document.createElement("p");
    console.log(names.length);
    p.innerText = `The length of list names[${names.join(',')}] is ${names.length}`;
    document.body.appendChild(p);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    p = document.createElement("p");
    let ul = document.createElement("ul");
    let li = document.createElement("li")
    p.innerText = "Writing names by referencing indexes individually";
    li.innerText = `names[0]: ${names[0]}`;
    ul.append(li)
    console.log(names[0]);

    li = document.createElement("li")
    li.innerText = `names[1]: ${names[1]}`;
    ul.append(li)
    console.log(names[1]);

    li = document.createElement("li")
    li.innerText = `names[2]: ${names[2]}`;
    ul.append(li)
    console.log(names[2]);

    li = document.createElement("li")
    li.innerText = `names[3]: ${names[3]}`;
    ul.append(li)
    console.log(names[3]);

    p.appendChild(ul)
    document.body.appendChild(p);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    p = document.createElement("p");
    p.innerText = "Writing names by iterating via for loop"
    ul = document.createElement("ul");
    for (let i = 0; i < names.length; i++) {
        li = document.createElement("li")
        li.innerText = `names[${i}]: ${names[i]}`;
        ul.appendChild(li);
        console.log(names[i]);
    }
    p.appendChild(ul)
    document.body.appendChild(p);

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    p = document.createElement("p");
    p.innerText = "Writing names by iterating via forEach loop"
    ul = document.createElement("ul");
    names.forEach((element, i) => {
        li = document.createElement("li");
        li.innerText = `names[${i}]: ${element}`;
        ul.appendChild(li);
        console.log(element);
    });
    p.appendChild(ul)
    document.body.appendChild(p);

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

     function first(array) {
        if (array.length > 0) {
            return array[0];    
        }
        return null;
     }

     function second(array) {
        if (array.length > 1) {
            return array[1];    
        }
         return null;
     }
     function last(array) {
        if (array.length > 0) {
            return array[array.length-1];    
        }
        return null;
     }
     p = document.createElement("p");
     p.innerText = `Getting first element from list [${names.join(',')}]: ${first(names)}`;
     document.body.appendChild(p);
     console.log(`Getting first element from list [${names.join(',')}]: ${first(names)}`);

     p = document.createElement("p");
     p.innerText = `Getting second element from list [${names.join(',')}]: ${second(names)}`;
     document.body.appendChild(p);
     console.log(`Getting second element from list [${names.join(',')}]: ${second(names)}`);

     p = document.createElement("p");
     p.innerText = `Getting last element from list [${names.join(',')}]: ${last(names)}`;
     document.body.appendChild(p);
     console.log(`Getting last element from list [${names.join(',')}]: ${last(names)}`); // return 5

})();
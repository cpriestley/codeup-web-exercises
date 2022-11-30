"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}
function isFalse(input) {
    return input === false;
}
function not(input) {
    return !input;
}
function addOne(input) {
    return parseFloat(input) + 1;
}
function isEven(input) {
    return parseInt(input) % 2 === 0;
}
function isIdentical(lhs, rhs) {
    return lhs === rhs;
}
function isEqual(lhs, rhs) {
    return lhs == rhs;
}
function or(lhs, rhs) {
    return lhs || rhs;
}
function and(lhs, rhs) {
    return lhs && rhs;
}
function concat(lhs, rhs) {
    return '' + lhs + rhs;
}
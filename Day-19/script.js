/*1. Find the Longest Word in a Sentence
Write a function that takes a sentence and returns the longest word in it.

📝 Example:
"I love programming in JavaScript" → "programming"

2. Remove Falsy Values from an Array
Falsy values: false, 0, "", null, undefined, NaN
Write a function that removes all falsy values from an array.

📝 Example:
[0, "hello", false, 42, "", null] → ["hello", 42] */


function removeFalsy(array) {
    let falsyVal = [null, undefined, false, 0, NaN, ""];
    let fal = array.filter((val) => {

        return falsyVal.includes(val) == false;
    })
    return fal;
}
console.log(removeFalsy(["Hello", undefined, NaN, "Raouf", "kasf", 12, "", null,]));
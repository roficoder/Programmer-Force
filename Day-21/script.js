/*1. Convert a String to a Number (without using parseInt)
Write a function that converts a string representing a number into its numeric form, but without using parseInt or parseFloat.

📝 Example:
"123" → 123
"456" → 456

 */

function toNumber(string) {
    let number = 0;
    for (let char of string) {
        number *= 10;
        for (let i = 0; i < 10; i++) {
            if (char == i) {
                number = number + i;
            }
        }

    }
    console.log(number);
}
toNumber("32323");
//Given a string of numbers, reverse it, and after reversing,convert it into number without using any method
//Convert the following into numbers: "765", "396","18765","54327","246382", also explain what you did

function toNumbers(array) {
    let ansArray = [];
    array.forEach((value) => {
        console.log("Number", value);
        let number = 0;
        for (let char of value) {
            number = number * 10;
            for (let i = 0; i < 10; i++) {
                if (char == i) {
                    number = number + i;
                    // console.log(i);
                }

            }
        }
        ansArray.push(number);
        number = 0;
    })

    return ansArray;
}
console.log(toNumbers(["736723", "82723", "4321"]));
//Explain: I have looped over the array of strings(numbers), I got single entity, I looped again, over a single entit(for of), then I looped to get numbers from 1 to 9, I checked the char of each number with for loop ranging from 1 to 9, if it founds char of string and i of for loop equal, then add it to a separate variable, but wait?before checking the number and even before the for loop multiply the number with 10;

function toReverse(str) {
    let number = 0;
    let reverseString = "";
    for (let i = str.length - 1; i > -1; i--) {
        reverseString += str[i];
    }
    //To Number
    for (let num of reverseString) {
        number *= 10;
        for (let i = 0; i < 10; i++) {
            if (num == i) {
                number += i;
            } 
        }
    }
    return number;
}
console.log(toReverse("7654323"));//without Decimals

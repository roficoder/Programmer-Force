/*
1. Count Vowels in a String
A program to count the number of vowels (a, e, i, o, u) in a given string.

2. Generate a Random Number in a Given Range
A function to generate a random number between min and max. */

function countVowels(str) {

    let countA = 0;
    let countE = 0;
    let countI = 0;
    let countO = 0;
    let countU = 0;
    let total = 0;
    let totalVowels = 0;
    if (typeof str === "string") {

        for (let char of str) {
            total++;
            if (char == "A" || char == "a") {
                totalVowels++;
                countA++;
            } else if (char == "E" || char == "e") {
                totalVowels++;
                countE++;
            } else if (char == "I" || char == "i") {
                totalVowels++;
                countI++;
            } else if (char == "O" || char == "o") {
                totalVowels++;
                countO++;
            } else if (char == "U" || char == "u") {
                totalVowels++;
                countU++;
            }
        }
        console.log("a : ", countA, "e : ", countE, "i : ", countI, "o : ", countO, "u : ", countU);
        console.log("Total Chars : ", total);
        console.log("Total Vowels ", totalVowels);
    } else {
        console.log("Invalid Input,please enter  Alphabets")
    }

}
countVowels();

//Problem:1 Sol_2
function countVowelstwo(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    if (typeof str === "string" && str != "") {
        str.split("").forEach((char) => {
            vowels.split("").forEach((vowel) => {
                if (vowel == char) {
                    count++;
                }
            })
        })
    } else {
        return "Invalid Input,please enter Alphabets(Uppercase , Lowercase)"
    }
    return count;
}
console.log(countVowelstwo(""))

//Problem:2 Sol_1

// function generateRandom(max, type = "accurate") {

//     if (type == "accurate") {
//         return Math.floor(Math.random() * max);
//     }else if(type == "precise"){
//         return Math.round(Math.random() * max);
//     }
// }
// console.log(generateRandom(100,"precise"));

function generateRandomtwo(min, max) {
    let unique;
    let output;

    for (let i = min; i < max + 500; i++) {
        unique = Math.ceil(Math.random() * i);
        if (unique > min && unique < max) {
            output=unique;
            break;
        }
    }
    return output
}
console.log(generateRandomtwo(10, 1010));
//Drawbacks
/*There are a lot of drawback, in this method,but 80% its fine, It tooke me 2 to 3 hours to solve this mystery */
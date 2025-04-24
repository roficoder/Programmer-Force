/*1. Reverse Each Word in a Sentence
This program reverses each word in a sentence while keeping the word order intact.

2. Check if Two Strings are Anagrams
Two strings are anagrams if they contain the same letters in any order (e.g., listen & silent).

//*/

//1
function reverseWord(sentence) {
    //Converting the sTring into Array
    let array = sentence.split(" ");
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed.join(" ");

}
console.log(reverseWord("Hello Talha Bhai Kysy hoo"));

//1(i)

function reversedWordChar(sentence) {
    //Converting string to arary without method(split)
    let wordArray = [];
    let word = "";
    for (let i = 0; i <= sentence.length - 1; i++) {
        if (sentence[i] !== " ") {
            word += sentence[i];
        } else {
            wordArray.push(word);
            word = "";
        }
    }
    wordArray.push(word);

    //Looping over single Word To REverse it
    let reversed = "";
    for (let word of wordArray) {
        //Reversed loop for reversing
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        reversed += " ";
    }
    console.log(reversed);


}
reversedWordChar("Hello Talha Kysy hoo")

//Learning
/*
1.Converted STring to an array using logics,,and push method  */

let string = "Hello&Talha*Kysy&Hoo#Tum"


function cleanStrin(string) {
    let cleanedString = "";
    let str = string;
    let word = '';
    for (let i = 0; i <= string.length - 1; i++) {
        console.log(i);
        if (str[i] !== '&' && str[i] !== '*' && str[i] !== '#') {
            word += str[i];
        } else {
            cleanedString += word + " ";
            word = "";
        }
    }
    cleanedString += word;
    return cleanedString;

}
console.log(cleanStrin(string));


//2 If two strings are anagram

function checkAnagram(str, strTwo) {
    //silent and listen
    //Converting to an array
    let a = "";
    if (str.length == strTwo.length) {
        for (let char of str) {
            for (let s of strTwo) {
                if (char == s) {
                    a += char;
                    break;
                }
            }
        }
    }
    return a == str;
}
console.log(checkAnagram("talha", "latha"));


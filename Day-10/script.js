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
/*1. Find the Longest Word in a Sentence
Useful when dealing with text content!

2. Count the Number of Vowels in a String

*/


function longestWord(sentence) {

    //Converting Sentence to Array, to find longeset word
    let sentenceArray = [];
    let word = '';
    for (let char of sentence) {
        if (char !== " ") {
            word += char;
        }
        else {
            sentenceArray.push(word);
            word = "";
        }
    }

    //2. Loop over the sentenceArray,
    let longest = ""
    sentenceArray.forEach((word) => {
        if (word.length > max.length) {
            longest = word;
        }

    })
    return longest;


}


//2.
function countVowels(string) {
    let count = 0;
        string.split("").filter((val)=>{
            let Vowels="aeiouAEIOU"
            return Vowels.includes(val) ?  count++ : "";
        })
    return count;

}

console.log(countVowels("Hello"))
/* 1. Find the Frequency of Each Element in an Array
This program shows how many times each element appears in an array.

2. Capitalize the First Letter of Each Word in a String
Like how titles are written—capitalize the start of each word. */

function FreqCount(array) {
    let count = {};
    array.forEach(function (element, index) {
        count[element] = 0;
    })
    for (let key in count) {
        for (let elem of array) {
            if (key == elem) {
                count[key]++;
            }
        }
    }

    return count;
}

console.log(FreqCount(["A", "B", "C", "A", "B", "A"]));

//2

function capitalizeWord(string) {
    let strArr = string.split(" ");

    let modifiedString = strArr.map(function (value) {
        return value[0].toUpperCase() + value.slice(1);
    })
    return modifiedString.join(" ")
}
console.log(capitalizeWord("usman bhai ja rhy hain ghr"));
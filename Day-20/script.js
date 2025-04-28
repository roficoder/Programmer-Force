/*1. Merge Two Arrays and Remove Duplicates
Write a function that merges two arrays and returns a new array with unique values only.

📝 Example:
[1, 2, 3], [2, 3, 4] → [1, 2, 3, 4]

2. Find the Missing Number in a Sequence
Write a function that takes an array of consecutive numbers with one missing and returns the missing number.

📝 Example:
[1, 2, 4, 5] → 3 */

function RemoveDuplicate(arrayOne, arrayTwo) {


    let newArray = [...arrayOne, ...arrayTwo];
    let duplicatesRemoved = [...new Set(newArray)];
    return duplicatesRemoved;
}
console.log(RemoveDuplicate([4, 8, 6, 3], [3, 9, 2, 2, 1, 1, 3]));


//missing number

function findMissing(array) {
    let firstIdx = array[0];
    let lastIdx = array[array.length - 1];

    let missing = 0;

    for (let element of array) {

        for (let i = firstIdx; i <= lastIdx; i++) {
            if (element !== i) {
                missing = i;
            }
        }

    }

    return missing
}

console.log(findMissing([20, 21, 22,23, 25]));
/*1. Find the Second Largest Number in an Array
A function that finds the second largest number in a given array.

2. Remove Duplicates from an Array
A function that removes duplicate values from an array.

//Problem 1:sol_1

function findSecondLargest(arr) {
    let arrangedElems = arr.sort();
    let reversedElems = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedElems.push(arrangedElems[i]);
    }
    let secondLargest=reversedElems[1];
    return secondLargest;
}
console.log(findSecondLargest([12, 76, 99, 68, 23]));
//Problem 1:sol_2

function findSecond(elem){
    return elem.sort().reverse()[1];
}
findSecond([3,8,9]);
*/


//Problem 2: sol_1

function removeDuplicates(array) {

    let index = array.map(function (val, idx, array) {
        return array.indexOf(val);
    })

    let indices = index.sort();
    let unqiueIdx = [...new Set(indices)];
    let uniqeElements=[];

    unqiueIdx.map(function (val) {

        uniqeElements.push(array[val]);

    })
    return uniqeElements
}

console.log(removeDuplicates([1, 1, 2, 1, 1, 2, 3, 4, 5]));
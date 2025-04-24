/*1. Find the Second Largest Number in an Array
*/

function secondLargest(array) {
    // Reversing an array to find the second largest 
    let ans = [...new Set(array)].reverse();
    //if more than one second largest are there then return them in an array
    let repeated = [];
    for (let elem of array) {
        if (ans[1].length == elem.length) {
            repeated.push(elem);
        }
    }
    let finalCount = [];

    if (repeated.length !== 1) {
        finalCount = repeated.reduce((first, second) => {
            return first == second ? first : "";
        })
    }

    return repeated.length == 1 && finalCount.length == 0 ? repeated : finalCount ? [ finalCount, repeated.length ] : ans[1];

}
console.log(secondLargest(["Hello", "Hello", "Talhee","Talhee", "KisaHato",]));

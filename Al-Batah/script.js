/*Write a programme to find the largest member of an array (using Reduce method) */

function longestWord(array) {


    let longest = array.reduce(function (previous, current) {

        return previous.length > current.length ? previous : current;

    },)

    return longest;
}
/*
Array main sy maximum find krny ky liye hm, three methods use kr skty hain:
Math.max()
Array.reduce(prev,next) => prev.length > next.length ? prev : next;
Array.map(value)=>let max=""; return value.length > max.length ? max=value: "",
Array main sy minimum find kry ky liye bhi similiar method use krty hain,wo ap khud try kijeye.
/*Write a programme to find the minimum number in an array */

console.log(longestWord(["Hello", "ho", "JobSearchesOnaaaaaaaaaaLnked", "Hain", "HelloWorldKysyhooTum"]))


//Write a programme to find the duplicate elements in an array(how many times an element is repeated in an array)



function checkCount(array) {
    let count = {}
    /*
    Algo:
    ..ForEach on Array to Store each element in object with 0 value,
    ..Now count(obj) and array have same elements
    ..Compare Each element of object with all elements of array using for-in and for-of loop respectively,(if-else,inside nested for-of an for-in)
    ..If you found that object element in the list of arrayElems,increase the respected count of elem stored in array, in this way, you will be able to get the number of 
    individual array,element
    .. */
    array.forEach(function (value) {
        count[value] = 0
    })

    //Looping Over Object

    for (let key in count) {//key is same as array elem

        console.log(count[key])

    }


}

checkCount(["ABC", "AB", "CDAAc", "AB", "ADED", "45", "KJAIAAK", "AKJASDASd", "%$"]);

//Write a programme to convert the nested array into individual array without using flat method


let nestedArray = [[1, 2, 3], ['a', "b", 'c'], ["!", "@", "$"]];
let result = [];

function singleArray(array) {
    array.forEach(function (value) {
        value.forEach(function (element) {
            result.push(element);

        })
    })
}
singleArray(nestedArray);
console.log("Nested Array", nestedArray);
console.log("Single Array", result);

//Write a function to find the first repeating element of an array

function findRepeated(arr) {
    let sorted = arr.sort();
    let common = [];
    for (let i = 0; i < arr.length; i++) {

        let max = sorted[i];
        if (max === arr[i + 1]) {
            common.push(max);
            break;
        }
    }
    return common
}

console.log("Repeated ", findRepeated(["1", "2", "3", "2", "3", "1"]));


function findDuplicate(array) {

    let commonElem = [];
    let sortedArr = array.sort();
    sortedArr.forEach(function (element, idx) {
        let common = element;
        if (common === array[idx + 1]) {
            commonElem.push(common);
        }
    })


    return commonElem;

}
console.log(findDuplicate(["H", "H", "1", "2", "4", "2", "1", '4']));

//Find the No. of times a particular element is present in an array




function findCount(boxes) {
    let count = {};
    boxes.forEach(function (box) {
        count[box] = 0;
    })

    for (let key in count) {
        for(let item of boxes){
            if(key === item){
                count[key]++;
            }
        }
      
    }


    return count
}

console.log(
    findCount(["H", "H", "1", "3", "8", "10", "8", "j"])
)

//Write a function to remove the duplicate elements from an array 

function uniqueArray(array){


}
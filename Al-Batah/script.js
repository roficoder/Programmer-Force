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

// function equalElems(array) {
// let common=[];
//     array.forEach(function (element, idx,) {

//         array.forEach(function(elem,index){
//             if(element == elem){
//                 common.push(element);
//             }

//         })
       


       
//     })


//     console.log(common);

// }


// equalElems(["ABC", "AB", "CDAAc", "AB", "ADED", "45", "KJAIAAK", "AKJASDASd", "%$"]);


//Write a programme to find the duplicate elements in an array(how many times an element is repeated in an array)



function checkCount(array){
    let count={}
/*
Algo:
..ForEach on Array to Store each element in object with 0 value,
..Now count(obj) and array have same elements
..Compare Each element of object with all elements of array using for-in and for-of loop respectively,(if-else,inside nested for-of an for-in)
..If you found that object element in the list of arrayElems,increase the respected count of elem stored in array, in this way, you will be able to get the number of 
individual array,element
.. */
    array.forEach(function(value){
        count[value]=0
    })

//Looping Over Object

for(let key in count){//key is same as array elem

    console.log(count[key])

}
   

}

checkCount(["ABC", "AB", "CDAAc", "AB", "ADED", "45", "KJAIAAK", "AKJASDASd", "%$"]);


/*
push() and unshift mehtods returns the length of whole array
pop() and shift methods returns the deleted element of the array  

let arr=[1,2,4,3,2,6];
let englith=[["a","b","c","d"],[1,2,3,4],["A","B","C","D"]]
let digit=[1,2,3,4,5,6,7,8,9]
let newArr=englith.map(function(elem,idx){
   return elem.reverse();
})

console.log("Original",englith);
console.log("New ARR",newArr);
//how do  I came to know wheter an  methods modifies/or not modifies original array

/*Map
Returns the the elements in a new array afer performing the operation,
e.g;
Multiple individual element of array with 3 and return in new arra
 


let entities=[1,2,3,4,5,6,7,8,9];
let product=entities.map(function(word,idx){
    return word*3;
})
    
Find the sum of all numbers in an array 
Find the multiplication of all numbers present in an array*/

let numbes = [3, 4, 5, 6, 7, 7];
let n = numbes.reduce((previous, current, idx) => {
    console.log("Cuu", current);
    return previous + current;
}, 10)
console.log(n);
/*
Reduce Method
 . If the array is empty(throws an error,saying arra.reduce can not be use with empty array)
 . If the array has one element, then it will be assigned to accumulator, reduce will return that element as result, can callback will never be executed..
 . We can also assign value to accumulator, and the loop will be started from initial
 . By using reduce method iteration will be started from second element of array because first one is assigned to accumulator.
  */

/*
 */
let students = [
    {
        name: "Bhai",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 3.9,
    }, {
        name: "Talha",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 4.0,
    }, {
        name: "Raouf Bhai Jan",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 4.0,
    }, {
        name: "Shahzaman",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 3.8,
    },

    {
        name: "BhBroai",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 3.0,
    }, {
        name: "Bro2",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 3.2,
    }, {
        name: "Raouf Bro three Jan",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 3.6,
    }, {
        name: "Shahzo",
        marks: {
            English: "98",
            Physics: "98",
            Chemistry: "100",
            Biology: "200",
            computerScience: "200",
        },
        cgpa: 3.9,
    },

]

let second = students.filter(function (elem) {

    if (elem.cgpa >= 3 && elem.cgpa <= 3.5) {
        return elem.Position = "3rd";
    } else if (elem.cgpa > 3.5 && elem.cgpa < 3.8) {
        return elem.Position = "2nd";
    }
    else if (elem.cgpa >= 3.8) {
        return elem.Position = "1st";
    }
})
//Separating Student of 1st , 2nd and 3rd division
let First = [];
let Second = [];
let Third = [];
second.forEach(function (elem) {


    return elem.Position == "1st" ? First.push(elem) : elem.Position == "2nd" ? Second.push(elem) : elem.Position == "3rd" ? Third.push(elem) : "";

})


/*indexOf, LastIndexOf,includes,findIndex(callback) */


/*
lastIndexOf: If two same entities are present at different indexes in an array, then it gives the index of lastelement
indexOf:If two same enties are present at different indexes in an array, then indexOf returns the index of first element
includes: If element is present in an array, it returns true, otherwise false
e.g
let elem=["a","b","c","d","a"];
console.log(elem.indexOf('a'));
console.log(elem.lastIndexOf('a'));
console.log(elem.includes("e"))//false
console.log(elem.includes("a"))//true

indexOf : to make Search of any element to check whether it is present in array or not
return indexOf searched element if founds it . 
return -1 if element in not present in the Array.
Tip : 
To make search in an array use IndexOf ,findIndex,Includes
to make search in a string use search */
let arr = ['a', "b", 'd', 'e', 5, 'g', 2, "Talha"];
/* Write a simple programme to check whether element is present in the array, if it is present displays the outpu as "It is present",
if not then prints the outpus as "It is not present"
 */

if (arr.indexOf("") != -1) {
    console.log("It  is present");
} else {
    console.log("It is not present")
}

let elem = ["a", "b", "c", "d", "a"];
console.log("IndexOf", elem.indexOf('a'));
console.log("lastIndexOf", elem.lastIndexOf('a'));
console.log("includes", elem.includes("3"));

/*some(),every(),sort() */

/*Write a programme to find the a single prime  number present in an array\
2. Write a programme to check wheter an array has even number or not
3. Write a programme to check whether an array has odd numbers or not */

let number = [4, 7, 21, 27, 76, 57];
let primeNumber = number.some(function (element, index) {

    for (let i = 2; i < element; i++) {
        if (element % i != 0) return true;
        else return false;
    }
})

let eveNum = number.some(function (elem, idx) {
    return elem % 2 == 0

})
let oddNum = number.some(function (elem, idx) {
    return elem % 2 != 0
})
console.log("Prime Number", primeNumber);
console.log("Even Number", eveNum);
console.log("odd Number", oddNum);



let everyMethod = [2, 5, 7, 8, 9, 3, 2, 4, 5, 6, 7, 8, 9];

let everPrime = everyMethod.every(function (elem, idx) {
    let prim = "";
    for (let i = 2; i < elem; i++) {
        if (elem % i != 0) {
            return prim = 'true';
        }
    }
})

let everEven = everyMethod.every(function (elem, idx) {

    return elem % 2 === 0

})


let everOdd = everyMethod.every(function (elem, idx) {
    return elem % 2 != 0
})
console.log("EveryPrime",everPrime);
console.log("EverEven",everEven);
console.log("EverOdd",everOdd);

//Conclusion:
/*some() method is used when,we want to check a single element of array is satisfying a given condition,if it, then breaks the loop and returns true without looping over remaining elements
  every() method is used when, we want to check a given condition on every single element of an array,if all of the array elements satify a condition, then it returns true,  */

//sort()
/*It arranges the elements based on their ASCII value */
let sorted=["b","c","d","a","e"];
sorted.sort();
console.log("original",sorted);

//Reverse()
/*It reversed the element of array based on their position
Modifies the original array  */

let reverse=["Talha","Raouf","Shahzaib","AbdulRehman"];
console.log("original",reverse);
reverse.reverse();//All elements are reversed based on their indices
console.log("reversed",reverse);

/*join(separater)
As the name indicates, it firstly converts an array into string , all element of
array are converted into separted by parameter we pass as separator,
e.g:
*/
reverse=["Talha","Raouf","Shahzaib","AbdulRehman"];
let str=reverse.join("<");//Each array element will be separated by < symbol,you can use anything you want even blank space
console.log(str);


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

        array.forEach(function (element) {
            if (key == element) {
                count[key]++;
            }

        })
    }

    return count;
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
        for (let item of boxes) {
            if (key === item) {
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

function uniqueArray(array) {

    // return [...new Set(array)].sort();

    array.forEach(function () {


    })


}

console.log(uniqueArray(["1", "1", "2", "2"]));
/*
let str="A";
let binary=1000;
console.log(1000.toString(2));//Number System Interconverstion
console.log("A".charCodeAt(0));//CharCode Interconversion*/

//Write a function to generate the Fibonacci Series upto nth terms

function fibonacciSeries(num) {
    let previous = 0;
    let next = 1;
    let sum = previous + next;

    for (let i = 0; i < num; i++) {

        console.log(previous);
        previous = next;
        next = sum;
        sum = next + previous;


    }
}
fibonacciSeries(12);

//Find the Majority Element of an array*The element which is appeared more than 2 times

function majorityElem(elem) {
    let majority = [];
    let sorted = elem.sort();
    let count = {};
    let result = [];
    sorted.forEach((element, index) => {
        let major = element;

        if (major == sorted[index + 1]) {
            majority.push(major);
            count[major] = 0;
        }
    })

    for (let key in count) {
        for (let val of majority) {
            if (key == val) {
                count[key]++;
                if (count[key] == 2) {
                    result.push(key);

                }
            }
        }

    }

    return result;
}

console.log(majorityElem(["4", "0", "9", "0", "0", "0", "4", "0", "7", "0"],))

//Mehthod 2
function majorElemTwo(arr) {
    let sorted = arr.sort();
    let count = {};
    let majority = [];
    sorted.forEach(function (elem) {
        count[elem] = 0;
    })
    for (let key in count) {
        sorted.forEach(function (element) {
            if (key == element) {
                count[key]++;
            }
        })
        if (count[key] > 2) {
            majority.push(key);

        }
    }

}
majorElemTwo(["4", "0", "4", "9", "9", "0", "4", "0", "9", "0"])
/*
Write a programme to find the most repeated element in an array  */

function mostRepeated(arr) {
    let arrayCount = {};
    let result = [];
    let max = 0;
    arr.forEach(function (value, index) {
        arrayCount[value] = 0;
    })

    for (let key in arrayCount) {
        for (let val of arr) {
            if (key == val) {
                arrayCount[key]++;
            }
        }
        if (key > max) {
            max = key;
        }

    }

    return max

}

mostRepeated(["4", "0", "4", "9", "9", "0", "9", "0", "9", "0", "2", "2", "3", "4", "3", "2"])
//DrawBack
//1, But when two paramters with same time repetition?(What happens in this case).
/*Write a programme to find the element which is repeated respted times,(if 2,3,4,5,6,20) */
function RepeatedElem(arr, v = 2) {
    let count = {};
    let result = [];
    for (let value of arr) {
        count[value] = 0
    }

    for (let key in count) {
        for (let val of arr) {
            if (val == key) {
                count[key]++;
            }
        }
        if (count[key] >= v) {
            result.push(key);
        }
    }
    return [...new Set(result)];
}
console.log(RepeatedElem(["4", "0", "4", "9", "9", "0", "9", "0", "9", "0", "2", "2", "3", "4", "3", "2", "0", "0"], 2))

/*Write a programme to memic the array map function  */

function memicMap(arr) {
    let result = [];
    arr.forEach(function (value) {
        result.push(
            value   // + operation
        )
    })
    return result;
}
console.log(memicMap(["Hello", "AbdulRaouf", "kysy hain ap"]));


function memicFilter(arr) {
    let result = [];
    arr.forEach(function (value) {
        if (value % 2 != 0) {
            result.push(value);
        }
    })
    return result;
}
console.log(memicFilter([2, 5, 7, 9, 13, 17]));

/*Write a programme to find the elements, that makes the target element as sum */

function findElems(array, a) {
    let sorted = [...new Set(array)].sort();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if ((array[i] + array[j] + array[i + 1] + array[j + 1]) == a) {
                result.push(array[i]);
                result.push(array[j]);
                result.push(array[i + 1]);
                result.push(array[j + 1])

            }


        }
    }

}

console.log("F", findElems([1, 5, 2, 6, 2, 1, 5], 18));
//Write a programme to reverse a number
function reverNumber(num) {
    let plainText = num.toString();
    let result = "";

    for (let i = plainText.length - 1; i >= 0; i--) {
        result += plainText[i];
    }

    return Number(result);

}
reverNumber(123);
console.log(reverNumber(405));

//Write a programme to check if a given number is pallindromic or not.
function pallindromicCheck(number) {
    let reversed = "";
    let num = number;
    for (let i = 0; i < num; i++) {
        reversed += num % 10;
        num = Math.floor(num / 10);
    }

    return reversed == number;
}
console.log(pallindromicCheck(4043));
//Write a programme to capitalize the firstLetter of word in sentence
function capitalizeLetter(str) {
    let result = "";
    let array = [];
    if (typeof str == 'string') {
        for (let s of str) {
            result += s;
            if (s == " ") {
                array.push(result);
                result = "";
            }
        }
    } else {
        return "Invalid input, enter a string"
    }
    array.push(result);
    return array;


}
console.log(capitalizeLetter(2))
//Write a programme to capitalize the firstLetter of word in sentence 

function capitalizeString(str, p = "u") {
    //Converting String to An array
    let newStr = "";
    let array = [];
    let capitalizedStr = [];
    for (let s of str) {
        newStr += s;
        if (s == " ") {
            array.push(newStr);
            newStr = "";
        }
    }
    array.push(newStr);
    for (let elem of array) {
        if (p == "u" || p == "uppercase" || p == "Uppercase" || p == "UpperCase") {
            capitalizedStr.push(elem[0].toUpperCase() + elem.slice(1));
        } else if (p == "l" || p == "lowercase" || p == "Lowercase" || p == "LowerCase") {
            capitalizedStr.push(elem[0].toLowerCase() + elem.slice(1));
        }
    }
    return capitalizedStr

}
console.log(capitalizeString("kysy hoo"))


function findIntersection(one, two) {
    let common = [];
    for (let e1 of one) {
        for (let e2 of two) {
            if (e1 == e2) {
                common.push(e1);

            }
        }
    }

    return common;
}
console.log(findIntersection(["Ali", "Bhai", "Hoo"], ["Talha", "Bhai", "Hoo"]))

function uniqueElements(arrayOne, arrayTwo) {
    let common = [];
    let unique = [];
    let unqiueOne = [...new Set(arrayOne)].sort();
    let uniqueTwo = [...new Set(arrayTwo)].sort();

    for (let elem of unqiueOne) {
        for (let elemTwo of uniqueTwo) {
            if (elem == elemTwo) {
                common.push(elem);
            }
        }
    }

    for (let i = 0; i < unqiueOne.length; i++) {
        if (unqiueOne[i] !== common[i]) {
            unique.push(unqiueOne[i]);
        }
    }
    for (let i = 0; i < uniqueTwo.length; i++) {
        if (uniqueTwo[i] !== common[i]) {
            unique.push(uniqueTwo[i]);
        }
    }


    return unique;


}
console.log(uniqueElements(["a", "b", "j", "i", "c", "d"], ["a", "b", "d", "c", "k"]))


function uniqElems(oneArray, twoArray) {
    let sortedOne = [...new Set(oneArray)].sort();
    let sortedTwo = [...new Set(twoArray)].sort();
    let common = [];
    let different = [];
    for (let one of sortedOne) {
        for (let two of sortedTwo) {
            if (one == two) {
                common.push(one);
            }
        }
    }
    let sortedCommon = [...new Set(common)].sort();

    for (let i = 0; i < sortedOne.length; i++) {
        if (sortedOne[i] !== sortedCommon[i]) {
            different.push(sortedOne[i]);
        }

    }
    for (let i = 0; i < sortedTwo.length; i++) {
        if (sortedTwo[i] !== sortedCommon[i]) {
            different.push(sortedTwo[i]);
        }

    }

    return [...new Set(different)];


}

console.log(uniqElems(["Hello", "Talha", "Bhai", "Kysy", "hoo", "a"], ["Hello", "Raouf", "Bhai", "Kysy", "hoo", "a"]));

let ans=1;
function factorial(n) {

    let rever = 1;
   
  
    if (n != 0) {
        
      ans*=n;

        factorial(n - 1);
    }
    return ans

}
factorial(10);
console.log(factorial(12))
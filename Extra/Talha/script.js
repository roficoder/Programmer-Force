// /* 
// You have to unsorted arrays, sort them and return the output as single array
// */

// // function mergeArrays(one, two) {
// //     let merged =one.concat(two).sort();
// //     console.log(merged);

// //     // let result = merged.sort();
// //     // console.log(result);
// // }

// // let result = mergeArrays([1, 7, 3, 8], [9, 18, 32, 11]);
// // console.log(result);


// // function result(one,two){

// //     let onee=one.sort();
// //     let twoo=two.sort();
// //     onee=[...new Set(onee)];
// //     twoo=[...new Set(twoo)];
// //     let result=[...new Set([...onee,...twoo])]
// //      return result.sort();


// // }
// // console.log(result([1,4,18,8,9],[3,8,19,90,23,8,5,4]))


// function mergedArr(a, b) {

//     if (Array.isArray(a) && Array.isArray(b)) {
//         return [...new Set(a.concat(b))].sort((a, b) => (a - b));
//     }
//     else {
//         return "Invalid Input,make sure you are entering two arrays"
//     }

// }
// console.log(mergedArr([3, 8, 19, 90, 23, 8, 5, 4]))

// //Write a function to remove all of the space from a given string
// //using Method
// function removeSpaceMethod(string) {

//     return string.replaceAll(" ", "");
// }
// console.log(removeSpaceMethod("Hello  HEro"))
// //Using Logics

// function removeSpaceLogic(string) {
//     let result = "";
//     for (let char of string) {
//         if (char != " ") {
//             result += char;
//         }
//     }

//     return result
// }
// console.log(removeSpaceLogic("Hello Bhai"))

// //Find the Missing Number in an array, you have an array of numbers ranging from 1 to N,(with missing number),find it
// // function findBinary(num) {
// //     let number = num;
// //     let binary = "";
// //     while (number > 0) {
// //         binary = binary + number % 2;//Get Remainder 0 ,0,0,1
// //         number = Math.floor(number / 2);//Get Quotient 4,2,1
// //     }
// //     //Reversing the Number to get Final Results
// //     let finalResults = "";
// //     for (let i = binary.length - 1; i >= 0; i--) {
// //         finalResults += binary[i];
// //     }

// //     return finalResults

// // }

// // console.log(findBinary(8));

// // let sum = "";
// // console.log(sum += 1 % 2);
// // console.log(sum);




function findBinary(number) {
    //Problem
    //Store the Remainder every time and then replace it,
    //Actual Number must be divided(you can say yo have to perform Prime Factorization method and store the remainder as well as quotient
    //The Remainder is obtained with respect to quotien
    //Solution;
    //Varible to store the binary(we will reverse it after)
    //a loop that is executed until the quotient is zero
    //the actual number is manipulated 
    //Remainder is obtained by dividing with two

    let binary = "";


    while (number > 0) {
        ///Binary is to  store the remainder
        binary = binary + number % 2;
        //Remainder
        number = Math.floor(number / 2);
        //Removes the floating point(MAth floor), returns the quotient every times


    }

    let results = "";
    for (let i = binary.length - 1; i >= 0; i--) {
        results += binary[i];

    }
    return results
}
console.log(findBinary(11));

// function findDecimal(num) {
//     let plainText = num.toString();
//     let answer = 0;
//     let countone = 0;

//     for (let i = 1; i <= plainText.length; i++) {
//     }
//     plainText.split("").forEach((val) => {
//         if (val == 1) {
//             answer += 2 * 1;
//             countone++;

//             if (countone == 2) {
//                 answer += 2 * 2;
//             }
//         } else if (val == 0) {
//             console.log("Zero", val)
//             answer += 1
//         }

//     })
//     console.log(answer);
// }

// findDecimal(101);
// //To Do (Raat main )


function binary(num) {
    let number = num;
    let digits = "";
    for (let i = 0; number > 0; i++) {//Loop run as number reaches zero
        digits = digits + number % 2;
        number = Math.floor(number / 2);//Ans(half,secondHalf,thirdHalf,fourthHalf)
    }
    return digits.split("").reverse().join("");
}
console.log(binary(8));

/*Write a programme to find the common elements in two arrays */

function commonElements(a, b) {
    let common = [];
    a.forEach((value) => {
        b.forEach((val) => {
            if (value == val) {
                common.push(value);
            }

        })
    })


    return [...new Set(common)].sort((a, b) => a - b);
}


console.log(commonElements([1, 2, 3, 9, 6, 0, 4, 5], ["a", "b", "c", 3, 2, 1, 98, 7, 0, 3, 32, 4]));
//Drawbacks
/*
The Code is Bukly(not a good and not recommended programming practice) */
//Latest...
function commonElems(a, b) {
    return Array.isArray(a) && Array.isArray(b) ? a.filter((val) => b.includes(val)) : "Invalid Input, please enter an array"
}

console.log(commonElems([1, 3, 5, 5, 3, 34], [8, 56, 5, 87, 1, 2]));


/*
Write a programme to check if two strings are anagram(a word which is composed of same characters but with different order) */

function checkAnagram(strOne, strTwo) {
    let common = []
    strOne.split("").forEach((valuone) => {
        strTwo.split("").forEach((valuetwo) => {
            if (valuone == valuetwo) {
                common.push(valuone);

            }

        })
    })
    if (common.join("") == strOne) {
        return "Anagram";
    } else {
        return "Not Anagram";
    }

}

/*Write a function to convert the first letter of a word to uppercase 

function toUpperCase(string) {

    let capitalized = string.split(" ").map(function (value) {
        return value.replaceAll(value[0], value[0].toUpperCase())
    })
    return capitalized.join(" ");

}
console.log(toUpperCase("My name is talha bhatt how about you"))
function toLowerCase(string){
  return typeof string == 'string' ? string.split(" ").map((value)=>{return value.replaceAll(value[0],value[0].toLowerCase());}).join(" ") : "Invalid Input,please input a string";
}
console.log(toLowerCase("Hell Bhai Jan KySsy hain ap"));
*/

function officialMethodanagra(str){
   return typeof str == 'string' ? str.split(" ").map((word)=>{return word.charAt(0).toUpperCase() + word.slice(1)}).join(" ") : "Invalid input";
}
console.log(officialMethodanagra("olloaha heh aoa a"))
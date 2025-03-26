/*
1. Write a programme which has function, that accepts the string(sentence) and returns the longest word 
2. Factorial of a Number
3. Check if a Number is Prime
4. Print Fibonacci Series up to N Terms
*/

function longWord(str) {
    let arr = str.split(" ");
    let max = "";

    arr.forEach((word, idx) => {
        if (max.length < word.length) { max = word; }
    })
    return max;
}
let bigWord = longWord("Hello how are you man");


//A Programme to find the factorial of a number



function factorialNum(num) {
    let finalValue = 1;
    for (let i = num; i > 0; i--) {
        finalValue = finalValue * i;
    }
    return finalValue;
}

console.log(factorialNum(3));


function plusNumber(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

plusNumber(2)


//Write a programme to find the Prime Number

let num = 37;
let number = "";

for (let i = 2; i < num - 1; i++) {
    if (num % i == 0) {
        number = "false"
        break;
    } else {
        number = "true";
    }
}




//By using Function

function primeNumber(number) {

    let result = '';

    for (let i = 2; i < number - 1; i++) {
        if (number % i === 0) {
            return result = false;
        } else {
            return result = true;
        }
    }

}

console.log(primeNumber(57))


/*
A programme that print Fibonacci Series up to N Terms
*/

function fiboNacciSeries(num) {
    let pre = 0;
    let next = 1;
    let sum = 0;
    for (let i = 0; i < num; i++) {

        console.log(pre);
        sum = pre + next;
        pre = next;
        next = sum;
    }

}


fiboNacciSeries(10);




//Write a programme that finds the longest word from a string

function longestWord(string) {
    let longest = "";
    let arr = string.split(" ");
    let len = 0;
    arr.forEach(function (word, idx) {
        if (word.length > longest.length) {
            longest = word;
            len = longest.length;
        }
    })

    console.log("The longest word is : ", longest, "with length  of : ", len);
}


longestWord("Ali  ap");




/*Begginers
1.Write a function that accepts two arguments and returns the addition
2.Write a Programme that determines whether a number is even or odd,make function.
3.Write a programme that accepts a number and prints its table.
4.Write a programme that reverses a string
5.Find the maximum number of two input numbers
6.Write a programme to check if a number is prime or not
7.Find out the factorial of a number
8.Write a function to find the largest integar in an array
9.Write function which counts the number of vowels in a string
10.Write a function which checks whether a string is pallindrom or not
11.Find the second largest number store in an array
12.Write a function to remove the duplicate valies in an array*/



//Programme 1
function findSum(a, b) {
    return a + b;
}

console.log(findSum(10, 20));
//Programme 2
function findNature(a) {

    return a % 2 === 0 ? "Even Number" : "Odd Number";

}

console.log(findNature(20));

//Programme 3
function tableOf(n) {
    let arr = [];//Storing Table Data in an array
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
        arr.push(`${n} x ${i} = ${n * i}`);
    }
}

console.log(tableOf(13));

//Programme 4
function maxNumber(a, b) {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${b} is greater than ${a}`);
    }
}

//Programme 5 
function reversedString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    console.log("Reversed : ", reversed);
}
reversedString("Hello Talha Kysy hoo ap")
//Programme 6
function pallinDromeChecker(str) {
    let reversed = "";

    for (let i = 10; i >= 0; i--) {
        reversed += str[i];
    }

    if (reversed == str) {
        console.log("True");
    } else {
        console.log("False");
    }


}
pallinDromeChecker("Hello Talha");


//Programme 12

function removeDuplicate(arr) {

    let set = new Set(arr)
    return [...set]
}

console.log(removeDuplicate([11, 23, 44, 11, 23, 76]));
//Programme 12(ii)

function removeDup(arr) {

    return arr.filter((value, index) => {
    if(arr.indexOf(value) === index){
        return value;
    }
    })

}
console.log("Ans",removeDup([1, 3,3,5,10,45,2,3,87,23,20,18,23]));
//Programme 8

function largestNumber(number) {

    let greater = 0;
    for (let i = 0; i < number.length; i++) {

        if (number[i] > greater) {
            greater = number[i];
        }

    }

    return greater;

}
console.log("Largest :", largestNumber([12, 76, 99, 100, 87, 67, 54, 32, 77]));
//Set Two
/*Find the longest word from an array of string by keeping following given conditions:
1. If you could not found the maximum one then store the words of same length in an array
2. How would you deal with empty string and symbols like ,.
3. Also give us the number of words of same length in the string
 */



function longerWord(str) {
    //Removing the extra symbols
    let cleanText = str.replaceAll(",", "");
    cleanText = cleanText.replaceAll(".", "");
    cleanText = cleanText.replaceAll("?", "");
    cleanText = cleanText.replaceAll(")", "");
    cleanText = cleanText.replaceAll("(", "");
    //Converting into an array
    let finalArray = cleanText.split(" ");
    //Count of repeated and longer words
    let count = 0;
    //Variable for storing longestWord
    let longWord = ""
    //Array for storing most repeated words of same length and word of maximum length
    let longWordArr = [];
    for (let word of finalArray) {
        if (word.length >= longWord.length) {
            longWord = word;
            longWordArr.push(longWord);
            count++;
        }
    }
    console.log("Output : ", longWordArr, "Total Count : ", count);
}

longerWord("Hello. Talha Raouf Shahz Usman Rehmn Mehwish, how? am I? Do you, know mehwish(");





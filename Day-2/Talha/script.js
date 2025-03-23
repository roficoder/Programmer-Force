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



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
5.Find the maximum number of two input numbers*/



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


function tableOf(n) {
let arr=[];//Storing Table Data in an array
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n*i}`)
      arr.push(`${n} x ${i} = ${n*i}`);
    }
}

console.log(tableOf(13));

//Maximum Number

function maxNumber(a,b){
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }else{
        console.log(`${b} is greater than ${a}`);
    }
}

//Find the longest word from an array of string



function longestString(){
    let arr=["Hello","Talha","Kysy","Hoo"];
    let max="";
    let maxtwo="";

    arr.forEach(function(word){
       


        if(word.length > max.length){
            max=word;

            if(word.length == max.length){
                maxtwo=word;
            }
        }

    })
   console.log("Longest Word",max);
    

}
longestString();
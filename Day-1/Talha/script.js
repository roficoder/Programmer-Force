/*1. A program that takes three numbers and determines the largest one.

2. Swap Two Variables Without Using a Third Variable

 3. Reverse a String - A function that takes a string and returns the reversed version. */








/* Q:1
 A Programme to find the maximum of three inputs
 */
let numone = 1;
let numtwo = 10;
let numthree = 3;
let max;
if (numone > numtwo && numone > numthree) {
    max = numone;
} else if (numtwo > numone && numtwo > numthree) {
    max = numtwo;
    console.log("Max", max);
} else {
    max = numthree;
    console.log("Max", max);
}

console.log("Maximum number is", max);

//Approach 2 (Using a Function)

function maxNumber(a, b, c) {
    if (a > b && a > c) {
        // alert(a);
        return a;
    }
    else if (b > c && b > a) {
        // alert(b);
        return b;
    }
    else {
        // alert(c);
        return c;
    }
}

let maximum = maxNumber(22, 3402, 401);
console.log(maximum);



/*
Q:2
Swap Two Variable without using the third variable
Sol:
Using Destructuring
 */

let a = 44;
let b = 54;
[a, b] = [b, a];//Desctructuring,value of b will be assigned to the variable a and of a will be assigned to variable a 
console.log("AA", a);
console.log("BB", b);



/* 
Q:3
Make a function that accepts a string and returns its reverse form,(Don't use any method)
*/

function  reversedString(string){
    let reversed="";
    for(let i = string.length-1; i >= 0; i--){
        reversed = reversed + string[i];
    }
    return reversed;
}


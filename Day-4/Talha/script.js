/* 
1. Reverse a Number
A function that reverses a given number.
It will take a number and will return the reverse of the number
Example: If we input 3452 it should return 2543

2. The GCD (Greatest Common Divisor) of two numbers is the largest number that divides both without leaving a remainder.
This program will take two numbers and will return the largest number that divides both without leaving a remainder
Example: If we pass 24 and 60 into the function then it will return 12 as it can divide both and it is the largest number
 */


//Problem 1
function reverseNumber(num) {


    //Calculating total entities in the numbers

    let totalNum = num.toString();
    let count = 0;
    for (let n of totalNum) {
        count++;//No of Iterations
    }


    let reverse = "";
    let number = num;
    let remainder = 0;

    for (let i = 1; i <= count; i++) {
        remainder = number % 10;//Getting Last Digit
        number = Math.trunc(number / 10);//Removing Last Digit
        reverse += remainder;//Storing the elements
    }

    return Number(reverse);//Converting Stored strings to Integars





}

console.log(reverseNumber(23));
//DrawBack
//What If I enter 0022??(wrong return)
//What If I enter 31.432??(wrong return)


//Problem 2
/*Finding HCF of a two number*/


function findHCF(a, b) {

    let min;
    //
    if(a>b){
        min=a;
    }else {
        min=b;
    }
    let finalAns=0;
    for (let i = 1; i < min; i++){
        if(a%i == 0 && b%i ==0){

            finalAns=i;

        }
    }
return finalAns
    

}

console.log(findHCF(14, 36));


/*1.Write a programme  which accepts a number and checks whether it is pallindrome or not
e.g
If user input 313, it returns true,because reading it from left to right, or from right to left gives the same number.
*/



//Solution

/*
Algo:
 Take Number
 convert it to string
 Run reversed for loop from string length to zero(let i=plainText.length; i <=0; i--)
 store the results in a separte string variable named reversedStr
 compare both reversed Str with num (==) normal comparision

  */


function number(num) {
    //Converting Number into String (for counting iterations)
    let plainText = num.toString();
    let reversedStr = "";
    for (let i = plainText.length - 1; i >= 0; i--) {
        reversedStr += plainText[i];
    }

    if (typeof num == 'number') {
        if (reversedStr == plainText) {
            return true;

        } else if (reversedStr != plainText) {
            return false;
        }
    } else if (typeof num == 'string' || typeof num == 'boolean') {
        return "Invalid Input, please enter a Number"
    }
}
console.log(number(303203));


//Programme 2

/*Find the LCM of given numbers 
Algo:
 Take Two Numbers from User
 Make two arrays to store the multiples of eachNumber
 Make forEach loop and iterate over one array of elements,
 Make another loop inside the first loop and check the individual element of parent array into the forEach loop of child array,if founds true, returns it into a new array,
 Now, we have so many numbers(common Factors),but we need the smalleset no out of them,qs(How to find the smallest number in an array)
 Jugad:(I have used array.find() method to have the firstElement using condition if typeof val === 'string' returns me,)
*/




function LCMFinder(a, b) {
    //Stored Multiples of numberone and of numbertwo
    let MultipleOfa = [];
    let MultipleOfb = [];
    let CM=[];
    let LCM;
    for (let i = 1; i <= 10; i++) {
        MultipleOfa.push(a * i);
        MultipleOfb.push(b * i);
    }
    //Now,we have Multiples of A and B but,we have to find the common element of them..


    MultipleOfa.forEach(function (value, idx) {

        MultipleOfb.forEach(function (val) {

            if(value === val){
                CM.push(value);
            }
            
        })

    })

   LCM=CM.find((value)=>{
    return typeof value === 'number';
   })

  return LCM;
}

console.log(LCMFinder(6,8))





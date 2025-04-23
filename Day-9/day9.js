/*2. Print a Right-Angled Triangle Pattern with *
A classic pattern problem!

1. Merge Two Objects
A small program to merge two JavaScript objects.*/

//2
let obj = { name: "Talha", age: 18, class: 22, };
let objTwo = { aim: "To Crack MNC", success: 'Hardword' };
let final = { ...obj, ...objTwo };

//1


function makeTriangle(char, length) {

    for (let i = 1; i <= length; i++) {
        let ans = copyChar(char, i);
        function copyChar(char, length) {
            let copied = '';
            let copies = Array.from({ length: length }, () => {
                return char;
            })
            for (let i of copies) {
                copied += i;
            }
            return copied;
        }
        console.log(ans);

    }

}

makeTriangle("R", 8)



function makeTri(str = "*", length = "8") {
    for(let i=1; i<=length; i++){
        let copy=copyCount(str,i);
        console.log(copy);
    }

    function copyCount(str, length) {
        let copied = [];
        for (let i = 1; i <= length; i++) {
            copied.push(str);
        }
        return copied.join("");
    }

}

makeTri();//Str and length of triangle
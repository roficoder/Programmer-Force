/*let inputNum = prompt("Pick a random number");

function guessSquare(inputNum) {
    let actual = inputNum;
    for (let i = 0; i <= 5; i++) {
        let userInput = prompt("Write Answer");
        let number = inputNum * inputNum;
        console.log("old",userInput,"square",number);
        if (userInput == number) {
            alert("You Won!");
            break;
        }

    }
}
guessSquare(inputNum);
*/

//Write a function to generate the complete web page, having items 1 to 50.

function webPage(item) {
    let text = `<ol>`
    let body=`<HTML><head>My Website</head>
    <body>
    </body></HTML>`
    document.open(body);
    let heading = "<h1>My Webpage of 50 Items</h1>";
    text += heading;
    for (let i = 1; i <= 50; i++) {
        text += `<li>${item}</li>`;
    }


    let final = text + `</ol>`
    document.body.innerHTML = final;
}

// webPage("Talha");
//A function to keep promit user  to enter p letter
// let data=document.body.querySelector('h3');
// console.log("Data",data.dataset.talha);
// console.log("Value",data.dataset.idTwo);

let grand=document.querySelector("#grandparent")
let p=document.querySelector("#parent");
let child=document.querySelector("#child");

// grand.addEventListener("click",(e)=>{
//     console.log(e.target);
// })

// p.addEventListener("click",()=>{
//     console.log("PArent");
// })
// child.addEventListener("click",()=>{
//     console.log("Children");
// })
function prom(){
    return new Promise((res,rej)=>{
        res("Succeeded");
    })
}

let tal=prom();
console.log("PRomise",tal);

console.log("Not promise")
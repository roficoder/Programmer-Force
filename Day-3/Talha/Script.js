
//Programme 1

function countDigit(num) {
    let total = 0;
    let str = num.toString();
    for (let n of str) {
        total++;
    }

    return total;

}
console.log(countDigit(18239232));

//Programme 2


function sumOfdigit(num) {

    let number = num.toString();
    let sum = 0;

    for (let n of number) {
        for (let i = 0; i < 10; i++) {
            if (n == i) {
                sum += i;
            }
        }
    }

    return sum;
}
console.log(sumOfdigit(88));
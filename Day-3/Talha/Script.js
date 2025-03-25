


function countDigit(num){
   let total=0;
   let str= num.toString();
   for(let n of str){
     total++;
   }
 
   return total;
    
}
console.log(countDigit(18239232));
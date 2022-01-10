const { createFileLevelUniqueName } = require("typescript");

//calculate the same of all natural numbers from 1 to n
function sum_1_n(n){
  if(n==1){
    return 1
  }else return n+sum_1_n(n-1)
}
 console.log(sum_1_n(5))


 //number sequnce
function nth_term(x, n) {
  if (n == 1) {
    return 1;
  } else {
    return x + nth_term(x, n - 1);
  }
}
console.log( nth_term(3,5) ); // 13

//factorial!(n)
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial( n - 1);
  }
}
console.log( factorial(5) ); // 13

//greatest common denominator
function gcd(x,y){
  if(y==0){
    return x
  }else{
    return gcd(y, x % y)
  }
}
console.log(gcd(279,111))

//palindrome-are words that read the same forward and backward
// e.g level,kayak,hananah

// function palindrome(word){
//   if(word==0||)
// }

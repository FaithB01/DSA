
//calculate the same of all natural numbers from 1 to n
function sum_1_n(n){
  if(n==1){
    return 1
  }else return n+sum_1_n(n-1)
}
 console.log(sum_1_n(5))


 //number sequence
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

//palindrome- e.g level,kayak,hananah
function palindrome(word){
  let str=word.length
  if (word.length == 0||word.length==1) {
    return true;
  } else if (word[0]!=word[str-1]) {
    return false
  } else {
    let new_word=word[str-2]
    return palindrome(new_word)
  }
  }
console.log(palindrome('f'))

// //reverse
// function print_backwards(word){
//   let rev=word
//   let spt=rev.split('').reverse('').join()

//   return spt
// }
//  console.log(print_backwards('faith'))

// //print backwards
function backwards(phrase){
  let len=phrase.length
  if(phrase.length==1){
    return phrase
  }
  else{ 
    new_phrase=phrase[1]
    backwards(new_phrase)
    return (phrase[0])
  }
}

console.log(backwards('faith'))




function backwards(phrase){
  let len=phrase.length
  if(phrase.length==1){
    console.log(phrase) 
  }
  else{ 
     new_phrase=phrase.substr(1)
    backwards(new_phrase)
    console.log(phrase[0]) 
  }
}

console.log(backwards('faith'))

//factorial!(n)
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial( n - 1);
  }
}
console.log( factorial(5) ); // 13

//palindrome- e.g level,kayak,hananah
function palindrome(word){
  let str=word.length
  if (word.length == 0||word.length==1) {
    return true;
  } else if (word[0]!==word[str-1]) {
    return false
  }  
  else {
    let new_word=word.substr(1,str-2)
    return palindrome(new_word)
  }
  }
console.log(palindrome('level'))


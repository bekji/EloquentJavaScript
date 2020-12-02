function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10


  //TASK 2 - Recursion --- apparently it is not :)

  function isEven(number) {
    if (number % 2 == 0) {
      return true;
    } else return false;
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??
  
  //TASK 3 - Bean counting
  
  function countBs(word) {
    let wordString = String(word);
    let letterUpcase = 0;
    for (let count = 0; count < wordString.length; count++){
      if(wordString[count] === wordString[count].toUpperCase()){
        letterUpcase++;
      }
    }
    return letterUpcase;
  }
  
  
  function countChar(word, letter) {
    let wordString = String(word);
    let letterRepeat = 0;
    for (let count = 0; count < wordString.length; count++){
      if(wordString[count] === letter){
        letterRepeat++;
      }
    }
    return letterRepeat;
  }
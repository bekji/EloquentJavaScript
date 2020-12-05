
// Task-2 -- The sum of a range 

function range(start, end) {
  let startEnd = [];
  let initialNumber = start;
  for (let i = 0; i <= (end-start); i++) {
    startEnd.push(initialNumber);
    initialNumber++;
  }
  return startEnd;
}

function range(start, end, step) {
  let startEnd = [];
  let initialNumber = start;
  if (start < end) {
    for (let i = 0; i <= (end-start); i++) {
      startEnd.push(initialNumber);
      if (initialNumber != end) {
      	if (step != null){
        	initialNumber += step;
      	}
      	else {
      		initialNumber++;
      	}
      }
      else break;
      	
    }
  } 
  else {
  
    for (let i = 0; i <= (start-end); i++) {
      startEnd.push(initialNumber);
      if (initialNumber != end) {
      	if (step != null){
        	initialNumber += step;
      	}
      	else {
      		initialNumber++;
      	}
      }
      else break;
    }
    
  }
  return startEnd;
}


function sum(startEnd) {
  let sumArray = [];
  sumArray = startEnd;
  let result = 0;
  for (let i = 0; i < sumArray.length; i++) {
    result += sumArray[i];
  }
  return result;
}
console.log(range(2, 10, 2));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 2, -2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
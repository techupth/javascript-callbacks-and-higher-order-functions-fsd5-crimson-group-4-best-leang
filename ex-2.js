//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}
function customOperation(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      a.push(array[i]);
    } else {
      continue;
    }
  }
  if (a.length > 4) {
    return true;
  } else {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, customOperation);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, customOperation);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, customOperation);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

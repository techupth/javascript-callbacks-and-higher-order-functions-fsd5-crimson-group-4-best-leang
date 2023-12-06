//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;

      if (count == 5) {
        return true;
      }
    }
  }
  return false;
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 90, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;
const check1 = [];
const check3 = [];
// const countValueOver70=(studentScore)=>{
//   for(let i=0 ; )
scoreRoom1Result = atLeastFive(studentScoresRoom1, function (number) {
  return number > 70;
});
scoreRoom2Result = atLeastFive(studentScoresRoom2, function (number) {
  return number > 70;
});
scoreRoom3Result = atLeastFive(studentScoresRoom3, function (number) {
  return number > 70;
});
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

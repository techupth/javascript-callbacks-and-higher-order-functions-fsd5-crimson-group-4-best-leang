// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return operation(array);
}

function customOperation(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(array[i] + 5000);
  }
  return a;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries = forEach(employeeSalaries, customOperation);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

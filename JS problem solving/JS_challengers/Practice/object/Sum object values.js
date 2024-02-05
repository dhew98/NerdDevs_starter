//Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a) {
  let arr = Object.values(a);
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }
  return sum;
}

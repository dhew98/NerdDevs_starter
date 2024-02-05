//Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

function myFunction(a, b) {
  for (let x in a) {
    a[x] = a[x] * b;
  }
  return a;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));

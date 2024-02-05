//Sort an array of numbers in descending order
function myFunction(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}

console.log(myFunction([1, 3, 2]));

//Remove a specific array element

function myFunction(a, b) {
  for (let x of a) {
    if (x === b) {
      a.splice(a.indexOf(x), 1);
    }
  }
  return a;
}

console.log(myFunction([1, 2, "2", 1], 1));

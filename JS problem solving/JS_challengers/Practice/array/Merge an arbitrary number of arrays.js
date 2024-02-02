//Merge an arbitrary number of arrays

function myFunction(...arrays) {
  return arrays.flat();
}

console.log(myFunction([true, true], [1, 2], ["a", "b"]));
//output - [ true, true, 1, 2, 'a', 'b' ]

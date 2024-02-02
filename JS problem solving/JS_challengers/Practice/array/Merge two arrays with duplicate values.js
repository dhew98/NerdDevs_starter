function myFunction(a, b) {
  let arr = [...a, ...b];
  let newArr = [...new Set(arr)];
  return newArr.sort((a, b) => {
    return a - b;
  });
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));

//Check if all array elements are equal

function myFunction(arr) {
  let res = new Set(arr).size === 1 ? true : false;
  return res;
}

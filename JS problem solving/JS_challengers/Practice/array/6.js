//Return the longest string from an array of strings

function myFunction(arr) {
  let mx = -1,
    res = "";
  for (let x of arr) {
    if (x.length > mx) {
      mx = x.length;
      res = x;
    }
  }
  return res;
}

//easy method :

// function myFunction(arr) {
//   return arr.reduce((a, b) => (a.length <= b.length ? b : a));
// }

console.log(myFunction(["help", "me"]));

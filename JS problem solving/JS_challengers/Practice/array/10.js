//Sort array by object property

function myFunction(arr) {
  return arr.sort(function (x, y) {
    return x.b - y.b;
  });
}

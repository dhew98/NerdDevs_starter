//Split a number into its digits

function myFunction(a) {
  const str = a.toString();

  const res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(parseInt(str[i]));
  }

  return res;
}

console.log(myFunction(10));

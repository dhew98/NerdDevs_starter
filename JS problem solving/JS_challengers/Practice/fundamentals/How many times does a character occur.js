//How many times does a character occur

function myFunction(a, b) {
  let c = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] == a) c++;
  }
  return c;
}

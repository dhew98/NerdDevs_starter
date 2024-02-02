function myFunction(a) {
  return { key: a };
}

//ANOTHER WAY when a is key and b is value

// function myFunction(a, b) {
//     return { [a]: b };
//  }

//Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

function myFunction(a, b) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
}

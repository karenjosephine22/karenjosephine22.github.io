let a = 10;
let b = 40;

// this is called declaring or defining a function
function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
}

// bisa multiply juga pake *
function subtract(a, b) {
  let f = a - b;
  console.log("value of f", f);
  return f;
}

function greet(name) {
  let newName = name.toUpperCase();
  if (newName === "karen") {
    msg = "HELLO " + newName;
  } else {
    msg = "sorry I don't know you!";
  }
  console.log(msg);
  return msg;
}

let name = "karen";
greet(name);

// calling of a function
let sum = add(a, b);
console.log("value of sum", sum);
let sum2 = add(45, 67);
let d = 56;
let e = 8788;
let sum3 = add(d, e);
console.log("value of sum", sum3);
let balance = subtract(100, 35);
console.log("value of balance", balance);

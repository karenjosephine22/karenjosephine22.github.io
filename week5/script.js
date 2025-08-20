// string variables = text variable alphanumeric
const myName = "karen";
const myAge = "19";

console.log(myName, myAge, myName, myAge);

// number variable add subtract multipy diveide
let a = 10;
let b = 1234;
let c = a + b;
console.log(c);
const id = 12345;
const city = "melbourne";
const uni = "RMIT";

// objects: collection of related variables or data
const myStudentRecord = {
  name: "karen",
  id: 12345,
  city: "melbourne",
};

console.log(myStudentRecord.name);
console.log(myStudentRecord.city);

const myAssignmentRecord = {
  id: 12345,
  as1Score: 82,
  as2Score: 97,
  as3Score: 90,
};

const total =
  myAssignmentRecord.as1Score +
  myAssignmentRecord.as2Score +
  myAssignmentRecord.as3Score;
console.log(total);

// boolean = test condition check True or false
const isItEvening = true;
const isItRaining = false;

// null = box containing nothing
// undefined = gatau apa isinya?

// back ticks
const myAddress = `rmit university 124
latorbe st
melbourne is ${myName}'s address`;
console.log(myAddress);
const myDetails = `hello, I am ${myName}, I work for ${uni}`;
console.log(myDetails);

const student1 = "Alice";
const student2 = "Sarah";
const student3 = "Jack";
const student4 = "Mike";

console.log("hello", student1);
console.log("hello", student2);
console.log("hello", student3);
console.log("hello", student4);

let students = ["Alice", "Sarah", "Jack", "Mike", "Emily", "John", "Yoyo"];
// console.log("hello", students[0]);
// console.log("hello", students[1]);
// console.log("hello", students[2]);
// console.log("hello", students[3]);
// console.log("hello", students[4]);
console.log("array size", students.length);
for (let i = 0; i < students.length; i++) {
  console.log("value of i", i);
  console.log("hello", students[i]);
}

// let ids = [12, 13, 14, 15, 16];
// console.log(ids[2]);

// let score = 78;
// if (score > 80) {
//   console.log("hey, you got HD");
//   console.log("time for celebration");
// } else if (score <= 80 && score > 70) {
//   console.log("hey, you got D");
// } else if (score <= 70 && score > 50) {
//   console.log("hey, you passed");
// } else if (score < 50) {
//   console.log("sorry, you failed");
// }

let marks = "88";
let marks2 = 88;
console.log(marks === marks2);

// triple = checks the value as well as its type cause its different between string and
// intinya go for triple equals dibanding double equals

let shoppingCart = [
  { name: "T-shirt", price: 10 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
console.log("shopping array size", shoppingCart.length);
let cartTotal = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  cartTotal = cartTotal + shoppingCart[i].price;
  console.log("value of i", i);
  console.log("total so far", cartTotal);
}

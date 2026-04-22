// 1. Create an array of fruits and display the first and last element
const fruit = ["Banana", "Watermelon", "Apple", "Grape", "Orange"];
document.getElementById("fruits").innerHTML = fruit[0] + " " + fruit[4];

//2. add anew item "Mango" to this array

const fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
document.getElementById("fruitadd").innerHTML = fruits;

//3. Remove the last item from the array and display the updated array
fruits.pop();
document.getElementById("fruitremove").innerHTML = fruits;

//4. find the length of this array
const numbers = [10, 20, 30, 40];
const length = numbers.length;
document.getElementById("length").innerHTML = length;

//5. check if "laptop" exists in this array
const items = ["phone", "tablet", "laptop"];
const exists = items.includes("laptop");
document.getElementById("check").innerHTML = exists;

//6. loop through this array and display each value
const names = ["John", "Jane", "Peter"];
for (let n = 0; n < names.length; n++) {
  document.getElementById("loop").innerHTML += names[n] + " ";
}

//7. Sort this array in ascending order.
const nums = [50, 10, 5, 100];
nums.sort(function (a, b) {
  return a - b;
});
document.getElementById("sort").innerHTML = nums;

//8. Convert this array to string.

const colors = ["Red", "Blue", "Green"];
const colorsString = colors.toString();
document.getElementById("colors").innerHTML = colorsString;

//9. Create an empty array and add 3 items using index;
const cars = [];
cars[0] = "limousine";
cars[1] = "Suv";
cars[2] = "Toyota";
document.getElementById("cars").innerHTML = cars;

//10. Find the index of Orange

const fruits2 = ["Apple", "Orange", "Mango"];
document.getElementById("fruitindex").innerHTML = fruits2[1];

// CONDITION PRACTICE

//1. Write a program that checks if a number is greater than 10

const num = 15;
if (num > 10) {
  document.getElementById("condition").innerHTML =
    "The number is greater than 10";
}

//2. Check if a user us 18 or older

let age = 16;
if (age >= 16) {
  document.getElementById("age").innerHTML = "You are 18 or older";
}

//3. Write an if...else statement
let score = 4;
if (score == 3) {
  document.getElementById("score").innerHTML = "Your score is even";
} else {
  document.getElementById("score").innerHTML = "Your score is odd";
}

// 4. Use else if:
let grade = 70;
if (grade >= 70) {
  document.getElementById("gradeA").innerHTML = "A";
} else if (grade >= 50) {
  document.getElementById("gradeB").innerHTML = "B";
} else {
  document.getElementById("gradeC").innerHTML = "Fail";
}

//5. Use ternary operator
let myAge = (age = 20 ? "Adult" : "Minor");
document.getElementById("ternary").innerHTML = myAge;

//6. Use logical and (&&)
let number = 14;
if (number > 10 && number < 20) {
  document.getElementById("Lnumber").innerHTML =
    "The number is between 10 and 20";
}

//7. Use logical or (||)
let number2 = 0;
if (number2 === 0 || number2 > 1) {
  document.getElementById("Lnumber2").innerHTML = "The number is 0";
} else {
  document.getElementById("Lnumber2").innerHTML = "The number is not 0";
}

//8. Use Not (!)
let isloggedIn = false;
if (!isloggedIn) {
  document.getElementById("login").innerHTML = "Please log in";
}

//9. Use Switch
switch (new Date().getDay()) {
  case 1:
    document.getElementById("switch").innerHTML = "Monday";
    break;
  case 2:
    document.getElementById("switch").innerHTML = "Tuesday";
    break;
  case 3:
    document.getElementById("switch").innerHTML = "Wednesday";
    break;
  case 4:
    document.getElementById("switch").innerHTML = "Thursday";
    break;
  case 5:
    document.getElementById("switch").innerHTML = "Friday";
    break;
  case 6:
    document.getElementById("switch").innerHTML = "Saturday";
    break;
  case 7:
    document.getElementById("switch").innerHTML = "Sunday";
    break;
}

//10. Check Truthy/Falsy
let value = "";
if (value) {
  document.getElementById("truthy").innerHTML = "The value is truthy";
} else {
  document.getElementById("truthy").innerHTML = "The value is falsy";
}

// JAVASCRIPT OBJECT QUESTIONS

//1. Basic object Creation
const person = { name: "Tola", age: 40, isStudent: true };
document.getElementById("object").innerHTML = person.name;

//2. Accessing Properties
const car = { brand: "Toyota", model: "Camry", year: 2020 };
//alert(car.model);

//3. Updating Object Values
const user = { name: "John", age: 25 };
user.age = 30;
document.getElementById("Objuser").innerHTML = user.age;

//4. Adding New Properties

const users = { name: "Jane", age: 22 };
users.email = "jane@example.com";
document.getElementById("Objusers").innerHTML = users.email;

//5. Loop through Object

const student = { name: "Peter", score: "80", grade: "A" };
for (let key in student) {
  document.getElementById("loopobj").innerHTML +=
    key + ": " + student[key] + "<br>";
}

//6. object with array
const shop = {
  name: "My Store",
  products: ["Phone", "Laptop", "Tablet"],
};
for (let i = 0; i < shop.products.length; i++) {
  document.getElementById("objarray").innerHTML += shop.products[i] + "<br>";
}

//7. Nested Objects
const userss = {
  name: "John",
  address: {
    city: "Lagos",
    Country: "Nigeria",
  },
};
document.getElementById("nested").innerHTML =
  userss.address.city + "<br/>" + userss.address.Country;

//8. Create an object with a method:
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
document.getElementById("method").innerHTML = calculator.add(5, 10);

//9. Object Condition
const product = { name: "Phone", price: 1200 };
if (product.price > 100) {
  document.getElementById("objPro").innerHTML = "Expensive";
} else {
  document.getElementById("objPro").innerHTML = "Affordable";
}

//10. object + Array (Real-world)
const usersss = [
  { name: "John", age: 20 },
  { name: "Jane", age: 17 },
  { name: "Paul", age: 25 },
];
for (let i = 0; i < usersss.length; i++) {
  if (usersss[i].age <= 18) {
    document.getElementById("objarray2").innerHTML +=
      usersss[i].name + " is Under 18";
  }
}

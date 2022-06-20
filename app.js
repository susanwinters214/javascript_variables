console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Variable Exercise 1
const firstName = "Susan";
let lastName = "Winters";
var age = 21;

// Variable Exercise 2
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Variable Exercise 3
let city = "Dallas";
let passtime = "playing with my dog"
let myStory = `Hello! My name is ${fullName}. I live in ${city}. I enjoy ${passtime} and coding!`;
console.log(myStory);


//Operator Exercise 1:
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(add);

//Operatpr Exercise 2:
let _a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let _firstName = "Jackie";
let _lastName = "Chan";

console.log("EX2: What is the value of: a + str? ", _a + str);
console.log("EX2: What is the value of: a + str? ", + _a + str2);
console.log("EX2: What is the value of: a + isPresent? ", + _a + isPresent);
console.log("EX2: What is the value of: a + firstName? ", + _a + _firstName);
console.log("EX2: What is the value of: a + lastName? ",+ _a + _lastName);

//Operatpr Exercise 3:
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log("EX3: What is the value of: d == str3?", d == str3);
console.log("EX3: What is the value of: d === str3?", d === str3);
console.log("EX3: What is the value of: d === !isPresent2", !isPresent2);
console.log("EX3: What is the value of: eleven == str4 && d >= str3)", "eleven" == str4 && d >= str3);
console.log("EX3: What is the value of: d === !isPresent2 || isPresent2", !isPresent2 || isPresent2);
console.log("EX3: What is the value of: 0 == false)?", 0 == false);
console.log("EX3: What is the value of: 0 === false)?", 0 === false);
console.log("EX3: What is the value of: 0 != false?",0 != false);
console.log("EX3: What is the value of: 0 !== false", 0 !== false);

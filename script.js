"use strict";

//1

let newNumber = 100;

if (newNumber < 50) {
  console.log(`${newNumber} is less than 50`);
} else if (newNumber > 20) {
  console.log(`${newNumber} is greater than 20`);
} else {
  console.log(`Error`);
}

//2

let name = "Mariam";
// name გადახასული რატოა ვერ მივხვდი აქ და მესამე დავალებაში.
if (name === "Mariam") {
  console.log(true);
} else {
  console.log(false);
}

//3

switch (name) {
  case "Mariam":
    console.log(`The name is Mariam`);
    break;
  case "Ana":
    console.log(`the name is not Mariam, its Ana`);
  default:
    console.log(`Name N/A`);
    break;
}

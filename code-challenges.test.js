// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("aboutMe", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" },
  ];
  const output = [
    "Ford Prefect is a hitchhiker.",
    "Zaphod Beeblebrox is president of the galaxy.",
    "Arthur Dent is a radio employee.",
  ];
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(aboutMe(people)).toEqual(output);
  });
});
//     ReferenceError: aboutMe is not defined
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Create a function called aboutMe that takes a parameter of an array.
// Iterate through the array using a map, and for each element, split up the first and last name into an array. Iterate through the names and capitalize the first letter of each word, then join them back together into a string. Return a template literal with the desired sentence, referencing the values via the original object using dot notation.
const aboutMe = (array) => {
  return array.map((array) => {
    let capName = object.name
      .split(" ")
      .map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
      })
      .join(" ");
    return `${capName} is ${object.occupation}.`;
  });
};

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainders", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainders(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainders(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

//     ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

// Create a function called remainders that takes an array as parameter.
// Filter the array to only values with a typeof number
// Map over the new array and return the value % 3

const remainders = (array) => {
  return array
    .filter((value) => typeof value === "number")
    .map((value) => value % 3);
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCube", () => {
  const cubeAndSum1 = [2, 3, 4];
  const cubeAndSum2 = [0, 5, 10];
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(sumCube(cubeAndSum1)).toEqual(99);
    expect(sumCube(cubeAndSum2)).toEqual(1125);
  });
});

//     ReferenceError: sumCube is not defined

// b) Create the function that makes the test pass.
// Create a function called sumCube that takes a parameter of an array
// Set up a variable to hold the sum, called sum
// Iterate through the array using forEach, on each loop cube the current value and add the result to sum. Return the sum.

const sumCube = (array) => {
  let sum = 0;
  array.forEach((value) => (sum += value ** 3));
  return sum;
};

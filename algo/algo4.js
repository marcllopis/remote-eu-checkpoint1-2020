/*
Here is an array of people. Write a function which will return a new array, itself containing two arrays:
- The first one contains only adult females
- The second one contains only adult males
(Given a person is an adult if she/he is 18 or older)
*/

const people = [
  { name: "Mary Poppins", age: 32, sex: "female" },
  { name: "Tony Stark", age: 36, sex: "male" },
  { name: "John Doe", age: 12, sex: "male" },
  { name: "Jane Doe", age: 6, sex: "female" },
  { name: "Homer Simpson", age: 45, sex: "male" },
  { name: "Leonardo Di Caprio", age: 42, sex: "male" },
  { name: "Carla Bruni", age: 54, sex: "female" },
  { name: "Lisa Simpson", age: 13, sex: "female" },
  { name: "Millie Bobby Brown", age: 15, sex: "female" },
  { name: "Penelope Cruz", age: 47, sex: "female" }
];

let maleArr = [];
let femaleArr = [];
let result = [];

function findAdults(arr) {
  // Your code here !
  result.push(maleArr = arr.filter((item) => item.age >=18 && item.sex == "male"));
  result.push(femaleArr = arr.filter((item) => item.age >=18 && item.sex == "female"));
  console.log(result)
}

findAdults(people)


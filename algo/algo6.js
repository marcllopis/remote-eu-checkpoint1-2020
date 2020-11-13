/*
Write a function with two parameters. These parameters are arrays, holding numbers **stored as strings**.
Your function should return **one** array, where every element is the sum of the two matching arguments's elements (ie: the first element in the resulting array equals the first element of the first argument plus the first element from the second argument).
Note: If an element is empty, it should count as a 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
  if (arrayA.length >= arrayB.length) {
    return arrayA.map((numberA, index) => Number(numberA) + (arrayB[index] === undefined ? 0 : Number(arrayB[index])));
  } else {
    return arrayB.map((numberB, index) => Number(numberB) + (arrayA[index] === undefined ? 0 : Number(arrayA[index])));
  }
};

console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]));
console.log(sumArr(["2", "7", "3"], ["2", "4", "9"]));
console.log(sumArr( ["2", "4", "9"],["2", "7", "3", "8", "2"]));

/*
[Running] node "c:\Users\Carlos\Documents\WCS\remote-eu-checkpoint1-2020\algo\algo6.js"
[ 3, 6, 4 ]
[ 4, 11, 12 ]
[ 4, 11, 12, 8, 2 ]

[Done] exited with code=0 in 0.08 seconds


Ok so I wanted to get rid of the "=== undefined" but I have to get to the other exercises.
*/
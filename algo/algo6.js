/*
Write a function with two parameters. These parameters are arrays, holding numbers **stored as strings**.
Your function should return **one** array, where every element is the sum of the two matching arguments's elements (ie: the first element in the resulting array equals the first element of the first argument plus the first element from the second argument).
Note: If an element is empty, it should count as a 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
*/

const sumArr = (arrayA, arrayB) => {
  let result = [];
  if (arrayA.length > arrayB.length) {
    for (let i=arrayB.length; i<arrayA.length; i++) {
      arrayB.push('0');
    };
  } else if (arrayA.length < arrayB.length) {
    for (let i=arrayA.length; i<arrayB.length; i++) {
      arrayA.push('0');
    };
  };
  for (let i = 0; i < arrayA.length; i++) {
    result.push(parseInt(arrayA[i]) + parseInt(arrayB[i]));
  };
  return result;
};

console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]));
console.log(sumArr(["2", "7", "3"], ["2", "4", "9"]));

console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]));
//arrayA and arrayB of 3rd test switched position
console.log(sumArr(["2", "4", "9"], ["2", "7", "3", "8", "2"]));

// result:
// [3, 6, 4]
// [4, 11, 12]
// [4, 11, 12, 8, 2]
// [4, 11, 12, 8, 2]
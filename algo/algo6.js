/*
Write a function with two parameters. These parameters are arrays, holding numbers **stored as strings**.
Your function should return **one** array, where every element is the sum of the two matching arguments's elements (ie: the first element in the resulting array equals the first element of the first argument plus the first element from the second argument).
Note: If an element is empty, it should count as a 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
*/

function sumArr(arr1, arr2) {
  let [long, short] = arr1.length >= arr2.length
  ? [arr1.map(Number), arr2.map(Number)]
  : [arr2.map(Number), arr1.map(Number)];
  return [...short.map((currentNumber, index) => currentNumber + long[index]), ... long.slice(short.length)]
}

console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]));
console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]));
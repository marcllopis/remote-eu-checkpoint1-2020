/*
Write a function with two parameters. These parameters are arrays, 
holding numbers **stored as strings**.
Your function should return **one** array, where every element is the 
sum of the two matching arguments's elements (ie: the first element in 
the resulting array equals the first element of the first argument 
plus the first element from the second argument).
Note: If an element is empty, it should count as a 0.

Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
*/

const sumArr = (arrayA, arrayB) => {
  let array1 = arrayA.map(Number);
  let array2 = arrayB.map(Number);
  // console.log(array1);  

  let total = array1.map((num, index) => num + array2[index]);
  console.log(total);
  return total;
};

console.log(sumArr(["2", "7", "3"], ["2", "4", "1"]));
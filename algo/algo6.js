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
  const res = arrayA.map((el, i) => {
    el = el ? el : '0';
    arrayB[i] = arrayB[i] ? arrayB[i] : '0';
    return Number(el) + Number(arrayB[i])
  })
  return res.map(el => String(el));
}

console.log(sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ))
/*
Write a function which can determine whether a year is a leap year. It must return `true` if it is, and `false` otherwise.
Reminder: A leap year checks **one** of these rules:
- It's divisible by 4, without being divisible by 100
- It's divisible by 400
Ex: 2004, 2016 and 2020 are leap years
Note bene: To check whether a number is divisible by another, you should use the "modulo" operator (%)
*/

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0
}

console.log("1900: ",isLeapYear(1900)); // should be false
console.log("2000: ",isLeapYear(2000)); // should be true
console.log("2004: ",isLeapYear(2004)); //should be true
console.log("2019: ",isLeapYear(2019)); // should be false
console.log("2020: ",isLeapYear(2020)); // should be true

/*
[Running] node "c:\Users\Carlos\Documents\WCS\remote-eu-checkpoint1-2020\algo\algo2.js"
1900:  false
2000:  true
2004:  true
2019:  false
2020:  true

[Done] exited with code=0 in 0.094 seconds
*/s
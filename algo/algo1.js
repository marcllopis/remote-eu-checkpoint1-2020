/*
Write a function which, given two angles from a triangle, will return the value of the third one.
(Reminder: the sum of the values of the three angles in a triangle is **always** 180°)
Ex: 
thirdAngle(90, 30) should return 60
thirdAngle(20, 80) should return 80
*/

function thirdAngle(a, b) {
  return 180 - a - b
}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));

/*
[Running] node "c:\Users\Carlos\Documents\WCS\remote-eu-checkpoint1-2020\algo\algo1.js"
60
80

[Done] exited with code=0 in 0.67 seconds
*/
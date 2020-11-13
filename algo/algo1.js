/*
Write a function which, given two angles from a triangle, will return the value of the third one.
(Reminder: the sum of the values of the three angles in a triangle is **always** 180°)
Ex: 
thirdAngle(90, 30) should return 60
thirdAngle(20, 80) should return 80
*/

const thirdAngle = (a, b) => {
  const sumOfAngles = 180;
  return sumOfAngles - (a + b);
}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));
/*
Our soccer team plays a tournament in which it played 10 matches.
Match results are noted "3:0": first number is **our** team's goals count ; the second is the other team's.
To know our team's score, we follow these rules:
- Victory: 3pts
- Draw: 1pt
- Defeat: 0pt
Given an array with our match's results, write a function which will return our score.
To test your function, if you "feed" your function the array under this text, you should get 12 points.
*/

const scores = [
  "1:0",
  "2:0",
  "3:0",
  "4:4",
  "2:2",
  "3:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4"
];

const getPoints = (array) => {
  let ourPoints = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i].slice(0, 1) > array[i].slice(2)) {
      ourPoints += 3;
    } else if (array[i].slice(0, 1) == array[i].slice(2)) {
      ourPoints += 1;
    }
  }
  return ourPoints;
};

console.log(getPoints(scores));

// result:
// 12
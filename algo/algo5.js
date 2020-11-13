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

function getPoints(array) {
  let results = [];
  array.forEach(score => {
    score = score.split(":");
    results.push(Number(score[0]) > Number(score[1]) ? 3 : Number(score[0]) === Number(score [1]) ? 1 : 0);
  });
  return results.reduce((total, score) => total + score);
}

console.log(getPoints(scores));

/*
PS C:\Users\Carlos\Documents\WCS\remote-eu-checkpoint1-2020\algo> node algo5.js
12
*/
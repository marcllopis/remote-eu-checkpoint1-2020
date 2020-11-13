/*
Our soccer team plays a tournament in which it played 10 matches.
Match results are noted "3:0": first number is **our** team's goals 
count ; the second is the other team's.
To know our team's score, we follow these rules:
- Victory: 3pts
- Draw: 1pt
- Defeat: 0pt
Given an array with our match's results, write a function which will 
return our score.
To test your function, if you "feed" your function the array under this 
text, you should get 12 points.
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
  let total = 0;

  let ourScore = array.map(score => {
    let nums = parseInt(score[0] - score[2]);    
    
    if(nums > 0) total += 3;
    else if(nums < 0) total += 0;
    else total += 1;
  });
  return total;
}

console.log(getPoints(scores));
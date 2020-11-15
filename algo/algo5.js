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
 let points = 0;
function getPoints(array) {
  
 let newArray = array.map(element => element.split(":"));
 for(let i = 0; i < array.length; i++) {
     if(newArray[i][0] > newArray[i][1]) {
        points += 3;
     } else{
       if(newArray[i][0] === newArray[i][1]) {
        points ++;

       } else{
         points +=0;
       }    
     }    
 }
 return points
}

console.log(getPoints(scores));
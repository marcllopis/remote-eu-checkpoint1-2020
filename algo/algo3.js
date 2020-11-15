/*
A theater employee wants to display every seat in the main room.
In said room, seats are arranged like this:
- There are 26 columns of seats, labelled from "1" to "26"
- Every column contains 100 seats, labelled from "1" to "100"
Your final list should like this:
  1-1
  1-2
  1-3
  .
  .
  .
  26-98
  26-99
  26-100
*/


function theaterSieges() {
let seatColumns =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

let numSeats = []
 for (let i = 0; i < 100; i++) {
  numSeats.push(i+1)
 }
 let seatMap = seatColumns.map(columns => numSeats.map(seats => {
     return columns + '-' + seats;
 }
  ) )
  return seatMap;
};

console.log(theaterSieges());
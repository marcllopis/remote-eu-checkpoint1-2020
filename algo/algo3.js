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
  // Your code here !

let theater = [];

//row
for (let i = 0; i < 26; i++) {
  let rows = [];
  //column
  for (let j = 0; j < 100; j++) {
      rows.push(`${i + 1}-${j + 1}`)
  }
  theater.push(rows);
}
return theater;
}

console.log(theaterSieges());


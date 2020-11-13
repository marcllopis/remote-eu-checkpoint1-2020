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
  let sieges = [];
  for (let siege = 1; siege<27; siege++ ){
    let theater = [];
    for (let seats = 1; seats < 101; seats++) {
      theater.push((siege) + " - " +seats)
    }
    sieges.push(theater)
  }
  return sieges;
}



console.log(theaterSieges());
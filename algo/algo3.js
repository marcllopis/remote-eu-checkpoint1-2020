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

const theaterSieges = () => {
  //26 columns of seats
  let column =[]
  for(let i = 1; i <= 26; i++){
    column.push(i)
}
//100 seats in a column
 let seats =[]
 for(let i = 1; i<=100; i++){
   seats.push(i)
 }

 return column.map(col => seats.map(seat => col  + '-' + seat))

}

console.log(theaterSieges());
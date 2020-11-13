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
let columns = []
let seats = []
for (i=0; i<26; i++){
  columns.push(i+1)
}
for (i=0; i<100; i++){
  seats.push(i+1)
}
/* RETURNS STRING */
theaterSieges = () => {
  let seatsArray = columns.map(columns => seats.map(seats => {
    return `${columns}-${seats} \n`;
}).join("")).join("")
return seatsArray
}
/* RETURNS ARRAY */
/* theaterSieges = () => {
  let seatsArray = columns.map(columns => seats.map(seats => {
    return `${columns}-${seats}`;
}))
return seatsArray
} */

console.log(theaterSieges());
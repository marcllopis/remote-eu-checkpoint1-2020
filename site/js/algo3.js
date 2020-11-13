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

// I first created what is asked in this exercise outside of the function. It is as follows:

let rowOfSeats = [...Array(27).keys()];
rowOfSeats.shift();
let columnOfSeats = rowOfSeats.map((seat) =>{
    let theatreSeats = [];
    for (let s = 1; s <= 100; s++) {
        theatreSeats.push(`${seat}-${s}`);
    }
    return theatreSeats
})

console.log(columnOfSeats);  

//The above code worked perfectly, creating a row of 26 seats with 100 columns.

// Once I tried putting the above code in to the function below, however, it was only returning 26 rows of undefined and I was no longer able to get it to work because by this point I had already spent well over an hour on it and had to move on to the HTML/CSS portion of the Checkpoint =(

/* function theaterSieges() {
    let rowOfSeats = [...Array(27).keys()];
        rowOfSeats.shift();
    let theatreSeats = [];
    let columnOfSeats = rowOfSeats.map((seat) =>{
        for (let s = 1; s <= 100; s++) {
            theatreSeats.push(`${seat}-${s}`);
    }
})
return columnOfSeats;
  }
  
console.log(theaterSieges()); */
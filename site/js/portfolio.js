const name = document.querySelector(".ask_user");
const rose = document.querySelector(".ask_color");

function askName() {
    const personAnswer = prompt("Please enter your name");
    if (personAnswer === "") {
     document.getElementById("name").innerHTML = "Stranger!";
     
    } else {
        document.getElementById("name").innerHTML = personAnswer ;
        document.getElementById("name").style.color = "white";
    }
  }
  name.addEventListener("click", askName);
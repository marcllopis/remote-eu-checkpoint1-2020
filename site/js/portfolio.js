/*toggle avatar script*/
let myAvatar=document.getElementById("myAvatar")
let avatarBoolean = true
toggleAvatar = () => {
    myAvatar.src= avatarBoolean ? "image/avatar-bis.png" : "image/avatar.svg"
    avatarBoolean = !avatarBoolean
}
myAvatar.addEventListener("click", () => toggleAvatar())

/*change name script*/
/*works but gives me "[Violation] 'click' handler took 2188ms"*/
let nameButton = document.getElementById("selectName")
let nameDisplay = document.getElementById("name")
changeName =() => {
    let color = prompt("Please choose a color (HEX)","#750ff7")
    let name = prompt("Please enter your name")
    nameDisplay.innerHTML=name
    nameDisplay.style.color="white"
    console.log(color)
    document.getElementsByClassName("pink-bg")[0].style.backgroundColor = color
    /*TODO, MAKE THIS MAP WORK*/
/*     document.getElementsByClassName("pink-bg").map(e => {e.style.backgroundColor = color}) */
}
nameButton.addEventListener("click", () => changeName())
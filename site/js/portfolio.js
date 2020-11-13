/*toggle avatar script*/
let myAvatar=document.getElementById("myAvatar")
let avatarBoolean = true
toggleAvatar = () => {
    myAvatar.src= avatarBoolean ? "image/avatar-bis.png" : "image/avatar.svg"
    avatarBoolean = !avatarBoolean
}
myAvatar.addEventListener("click", () => toggleAvatar())

/*change name script*/
let nameButton = document.getElementById("selectName")
let nameDisplay = document.getElementById("name")
changeName =() => {
    /* let name = prompt("Please enter your name")
    nameDisplay.innerHTML=name */
    nameDisplay.style.color="white"
}
nameButton.addEventListener("click", () => changeName())
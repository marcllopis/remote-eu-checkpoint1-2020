/*toggle avatar script*/
let myAvatar=document.getElementById("myAvatar")
let avatarBoolean = true
toggleAvatar = () => {
    myAvatar.src= avatarBoolean ? "image/avatar-bis.png" : "image/avatar.svg"
    avatarBoolean = !avatarBoolean
}
myAvatar.addEventListener("click", () => toggleAvatar())
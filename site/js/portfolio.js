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
    let backgroundArray = document.getElementsByClassName("pink-bg")
    let linksArray = document.getElementsByTagName("a")
    nameDisplay.innerHTML=name
    nameDisplay.style.color="white"
    console.log(color)
    backgroundArray[0].style.backgroundColor = color
    /*EXTRA TODO, MAKE THIS MAP WORK*//*FORLOOP WORKS*/
/*     document.getElementsByClassName("pink-bg").map(e => {e.style.backgroundColor = color}) */
    for(i=0; i<linksArray.length; i++){
        linksArray[i].style.color = color
    }
    /*extra. want a map here too*/
}
nameButton.addEventListener("click", () => changeName())

/*show front end dev tools*/
let myDevTools = ["VSCode", "Github", "Terminal"]
let DevToolsBtn = document.getElementById("DevToolsBtn")
let toolsArray = document.getElementById("front-dev-tools").getElementsByTagName("li")
showDevTools = () => {
    for (i=0; i<toolsArray.length; i++){
        toolsArray[i].innerHTML=myDevTools[i]
    }
}
DevToolsBtn.addEventListener("click", () => showDevTools())

/*add tools to backend*/
let text = document.getElementById("myText");
let button = document.getElementById("backEndBtn");
let list = document.getElementById("back-dev-tools")

addTools = () => {
    let newText = document.createElement("li");
    newText.innerHTML = text.value
    list.appendChild(newText)
    text.value=""
}
button.addEventListener("click", () => addTools())
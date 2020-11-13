function changeAvatar() {
    document.getElementById("avatar").src = "https://carlosaore.github.io/vault/assets%20for%20codepen/027-programmer.svg";
}

function nameChanger() {
    document.getElementById("description").style.backgroundColor = prompt("Feed me a new color", "only in correct format (#....), there is no validation logic");
    document.getElementById("name").style.color = "white";
    document.getElementById("name").innerHTML = prompt("Your name?", "no code injection pls");
    let newColor = prompt("another color for desert", "I'm still hungry for code");
    let collection = document.getElementsByClassName("menu a");
    for (let element of collection) {
        element.style.color = newColor;
    };    
}

function devToolChanger() {
    let collection = document.getElementsByClassName("devTool");
    collection[0].innerHTML = "JS"
    collection[1].innerHTML = "more JS"
    collection[2].innerHTML = "never CSS"
}

function addNewSkill() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(document.getElementById("newSkill").value);
    node.appendChild(textnode);
    document.getElementById("skillz").appendChild(node);

}
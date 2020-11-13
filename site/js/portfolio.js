let avImg = document.querySelector("#avatar");

avImg.addEventListener("click", function () {
    if (avImg.src.includes("avatar.svg")) {
        avImg.src = "./image/avatar-bis.png"
    }
    else {
        avImg.src = "./image/avatar.svg"
    }
});



let buttonChangeName = document.querySelector("#button-change-name");

buttonChangeName.addEventListener("click", function () {

    let textName = document.querySelector("#name");
    let allPinkBg = document.querySelectorAll(".pink-bg");

    let promptColor = prompt("Please enter your color e.x #750ff7", "#750ff7");
    let promptName = prompt("Please enter your name");

    textName.innerHTML = promptName;
    textName.style.color = "white";


    allPinkBg.forEach(pink => pink.style.backgroundColor = promptColor);


    let allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => link.style.color = promptColor);

});






let ul = document.querySelector("#front-dev-tools");
let modifyToolsButton = document.querySelector("#modify-tools-button");


modifyToolsButton.addEventListener("click", function () {

    ul.innerHTML = "";
    const newDevTools = ["VS Code", "GitHub", "Terminal"];

    newDevTools.forEach(devtool => {
        let newLi = document.createElement("li");
        newLi.innerHTML = devtool;
        ul.appendChild(newLi)
    }

    )
});


let addDevToolsButtons = document.querySelector("#add-tools-button");

let ulBack = document.querySelector("#back-end-tools");

addDevToolsButtons.addEventListener("click", function () {

    let inputValue = document.querySelector("#input").value;


    let newLiBack = document.createElement("li");
    newLiBack.innerHTML = inputValue;
    ulBack.appendChild(newLiBack);


});


//Task 1
let isAvatarChanged = false

document.querySelector(".intro-avatar").addEventListener("click",function(e){
  if (!isAvatarChanged){
    document.querySelector(".intro-avatar").src = "image/avatar.svg";
    isAvatarChanged = true;
  } else {
    document.querySelector(".intro-avatar").src = "image/avatar-bis.png";
    isAvatarChanged = false;
  }
})

//Task 2 and 3 and 4

document.getElementById("modifyNameAndColor").addEventListener("click",function(e){
  let color = prompt("Enter a color:");
  document.querySelectorAll(".pink-bg").forEach(element => {
    element.style.backgroundColor = color;
  });
  document.querySelectorAll(".pink-text").forEach(element => {
    element.style.color = color;
  });

  let name = prompt("Enter your name:");
  document.getElementById("name").innerHTML = name;
  document.getElementById("name").style.color = "white";
})

//Task 5

document.querySelectorAll("a").forEach(element => {
  element.style.color = "#750ff7";
});

//Task 6

document.getElementById("modifyDevTools").addEventListener("click",function(e){
  let listFrontDevTools = document.querySelectorAll("#front-dev-tools li");
  const newListFrontDevTools = ["VSCode", "Github", "Terminal"];
  listFrontDevTools.forEach((element, index) => element.innerHTML = newListFrontDevTools[index]);
})

//Task 7
// function addBackDevTools(){
//   let ulBackDevTools = document.getElementById("back-dev-tools");
//   let liBackDevTool = document.createElement("li");
//   liBackDevTool.innerHTML = "123";
//   ulBackDevTools.appendChild(liBackDevTool);
//   console.log("bu");
// }
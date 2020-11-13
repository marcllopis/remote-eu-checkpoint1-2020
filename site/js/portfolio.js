let avatar = document.querySelector('.avatar');
let button = document.querySelector('.nameButton');
let name = document.getElementById('name');
let pinkBg = document.querySelectorAll('.pink-bg');
let pinkText = document.querySelectorAll('.pink-text');
let links = document.querySelectorAll('a');
let list = document.querySelectorAll('.list');
let modify = document.querySelector('.modify-btn');
let ulSkill = document.querySelector('.addSkill');
let addBtn = document.querySelector('.add-btn');
let input = document.querySelector('.inp')

avatar.addEventListener('click', function(){
    avatar.src = "image/avatar.svg"
})

button.addEventListener('click', function(){
    let color = prompt("Choose your color")
    let ask = prompt("What's your name?");
    name.innerHTML = ask;
    name.style.color = "white";
    
    pinkBg.forEach(item =>item.style.backgroundColor = color)

    pinkText.forEach(item => item.style.color = color)

    links.forEach(item => item.style.color = color)
})

let arr = ['VsCode', 'Github', 'Terminal']


 modify.addEventListener('click', function(){
     list.forEach((item,i)=> item.innerHTML = arr[i])
 })

addBtn.addEventListener('click', function(){
   let newSkill = document.createElement('li');
   newSkill.innerHTML = input.value ;
   ulSkill.appendChild(newSkill);
   input.value = ''
})



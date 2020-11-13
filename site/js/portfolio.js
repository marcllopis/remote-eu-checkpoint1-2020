 // change pict
 const change = document.getElementById('ava-img')
 change.addEventListener('click', pictChange);

function pictChange(){
 change.src = "image/ava2.jpg";
}



// button

let btn = document.querySelector('.btn')
 let name = document.getElementById('name')
 let pinkBg = document.querySelectorAll(".pink-bg")
 let pinkText = document.querySelectorAll(".pink-text")
 

 

btn.addEventListener('click',button)

function button(){
    let newName = prompt('Whats your Name?');
    let newColor = prompt('Enter a color');
    name.innerText = newName
    name.style.color = "white"

    for(let i =0; i< pinkBg.length; i++){
        pinkBg[i].style.backgroundColor = newColor
    }

    for(let j =0; j< pinkText.length; j++){
        pinkText[j].style.color = newColor
    }
    
    
}


let links = document.querySelectorAll('a')
for(let i=0;i<links.length; i++){
    links[i].style.color = '#750ff7'
}


let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',button2)



let li = document.querySelectorAll('#front-dev-tools li')

function button2(){
for(let i=0; i<li.length; i++){

    if( i == 0){
        li[i].innerHTML = 'VSCode'
    }
    else if( i == 1){
        li[i].innerHTML = 'GitHub'
    }
    else{
        li[i].innerHTML = 'Terminal'
    }
   
}
}


let myul = document.getElementById('myul')
let btn3 = document.querySelector('.btn3')
let myinput = document.querySelector('.myinput')
btn3.addEventListener('click',button3)

function button3(){
    myul.innerHTML += '<li>' + myinput.value + '</li>'
}
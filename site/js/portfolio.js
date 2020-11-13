 // change pict
 const change = document.getElementById('ava-img')
 change.addEventListener('click', pictChange);

function pictChange(){
 change.src = "image/ava2.jpg";
}



// button

let btn = document.querySelector('.btn')
 let name = document.getElementById('name')
 let pinkBg = document.getElementById('pinkBg')
 

btn.addEventListener('click',button)

function button(){
    let newName = prompt('Whats your Name?');
    let newColor = prompt('Enter a color');
    name.innerText = newName
    name.style.color = "white"

    pinkBg.style.backgroundColor = newColor
}




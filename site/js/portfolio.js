const avatarChange = document.querySelector('.avatar-img');
avatarChange.addEventListener('click', function(){
    avatar.src = 'image/avatar.svg'
})

function promptMe(){
let nameReturn = prompt('What is your name?');
document.getElementById("name").innerHTML = nameReturn;
document.getElementById("name").style.color = 'white'
document.getElementById('colorChange').style.backgroundColor = '#750ff7'
document.getElementById('colorChange2').style.backgroundColor = '#750ff7'
document.getElementById('colorChange3').style.color = '#750ff7'
document.getElementById('colorChange4').style.color= '#750ff7'
document.getElementById('colorChange5').style.color = '#750ff7'
document.getElementById('colorChange6').style.color = '#750ff7'
document.getElementById('colorChangeLink1').style.color = '#750ff7'
document.getElementById('colorChangeLink2').style.color = '#750ff7'
}

const listChange = document.getElementById('modifySkills');
listChange.addEventListener('click', function(){
    document.getElementById('liOne').innerHTML = 'VSCode'
    document.getElementById('liTwo').innerHTML = 'Github'
    document.getElementById('liThree').innerHTML = 'Terminal'
})


// Adding JS to Add Dev Tools skillsList. Trying to create li, then add input to li and attach  to ul 

const devForm = document.getElementById('devForm')
const inputText = document.getElementById('nameDevTools')
const skillsList = document.getElementById('skillsList')

devForm.onsubmit = function (event){
    event.preventDefault();

    const newLi = document.createElement('li');

    newLi.innerHTML = inputText.value;

    skillsList.appendChild(newLi);

    inputText.value = ''

}
document.getElementById('avatar').addEventListener('click', function(){
    document.getElementById('avatar').src = 'image/avatar-bis.png'
})


document.querySelector('button').addEventListener('click', function (){
    const color = prompt('Enter color')
    const name = prompt('Enter your name')
    document.getElementById('name').innerHTML = name
    document.getElementById('name').style.color = '#ffffff'
    document.getElementById('pink1').style.backgroundColor = color
    document.querySelector('button').style.backgroundColor = color
    document.getElementById('pink2').style.backgroundColor = color
    document.getElementById('pink3').style.color = color
    document.getElementById('pink4').style.color = color
    document.getElementById('pink5').style.color = color
    document.getElementById('pink6').style.color = color


    document.getElementById('pink7').style.color = color
    document.getElementById('pink8').style.color = color

})


// MARC:


// Change avatar image
const avatar = document.getElementById('avatar');

avatar.addEventListener('click', function() {
  avatar.src = "image/avatar-bis.png"
});



const getNewColorFromPink = {
  ['pink-text']: (el, color) => el.style.color = color,
  ['pink-bg']: (el, color) => el.style.backgroundColor = color
}

const changeNameButton = document.getElementById('change-name');

changeNameButton.addEventListener('click', function() {
  // Change name
  document.getElementById('name').innerHTML = prompt('What is your name?');
  document.getElementById('name').style.color = 'white';

  // Change bg color
  let newColor = prompt('Give me a color (please hex value)')
  document.querySelectorAll("*").forEach(el =>{
    if(el.className.match(/pink/)) {
      let pinkToString = el.className.match(/pink([^ ]+)/)[0]
      getNewColorFromPink[pinkToString](el, newColor)
    }
  })
});


// First bonus
[...document.getElementsByTagName('a')].forEach(element =>{
  element.style.color = '#750ff7'
})

// Second bonus
document.getElementById('change-tools').addEventListener('click', function(){
  document.getElementById('front-dev-tools').innerHTML = '<li>VSCode</li><li>GitHub</li><li>Terminal</li>'
});

// Third bonus
document.getElementById('backend-btn').addEventListener('click', function(){
    let newElement = document.createElement('li');
    newElement.innerHTML = document.getElementById('backend-input').value;
    document.getElementById('backend-tools').appendChild(newElement);
    document.getElementById('backend-input').value = '';
});


//JACOPO

const avatarImg = document.getElementById('avatar-img');
const nameSpan = document.getElementById('name');
const nameBtn = document.getElementById('name-btn');
const presentationContainers = document.querySelectorAll('.pink-bg');
const pinkTexts = document.querySelectorAll('.pink-text');
const links = document.getElementsByTagName('A');
const devToolsUl = document.getElementById('front-dev-tools');
const devBtn = document.getElementById('dev-btn');
const backUl = document.getElementById('back-tools');
const backInput = document.getElementById('back-input');
const backBtn = document.getElementById('back-btn');

const avatarChanger = () => {
    avatarImg.src = "image/avatar-bis.png"
};

const nameChanger = () => {
    let userName = prompt('Hey, what is your name?');
    nameSpan.innerHTML = userName;
    nameSpan.style.color = 'white';
};

const colorChanger = () => {
    let userColor = prompt ('Hey, which color do you like?');
    for (let i = 0; i<presentationContainers.length; i++) {
        presentationContainers[i].style.backgroundColor = userColor;
    };
    for (let i=0; i<pinkTexts.length; i++) {
        pinkTexts[i].style.color = userColor;
    };
    for (let i=0; i<links.length; i++) {
        links[i].style.color = userColor;
    }
};

const liChanger = () => {
    devToolsUl.innerHTML = '<li>VSCode</li><li>GitHub</li><li>Terminal</li>'
    ;
}


const addSkill = () => {
    let newLi = document.createElement('LI');
    newLi.innerHTML = '' + backInput.value + '';
    backUl.appendChild(newLi);
    backInput.value = '';
}

avatarImg.addEventListener('click', avatarChanger);
nameBtn.addEventListener('click', nameChanger);
nameBtn.addEventListener('click', colorChanger);
devBtn.addEventListener('click', liChanger);
backBtn.addEventListener('click', addSkill);
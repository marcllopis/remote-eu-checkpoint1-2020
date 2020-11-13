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
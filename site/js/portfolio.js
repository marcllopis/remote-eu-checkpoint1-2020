const firstAvatar = document.querySelector('.avatar');
const secondAvatar = document.querySelector('.avatar2');
const modifyBtn = document.querySelector('.my-btn');
const name = document.querySelector('#name');
const pinkBg = document.querySelectorAll('.pink-bg');
const pinkText = document.querySelectorAll('.pink-text');
const links = document.querySelectorAll('a');
const liBtn = document.querySelector('.modify_li');
const li = document.querySelectorAll('#front-dev-tools li');

const input = document.querySelector('.input_input');
const addBtn = document.querySelector('.input_btn');

const devTools = document.querySelector('.ul_table');

const toolsArray = ['VSCode', 'GitHub', 'Terminal'];

firstAvatar.addEventListener('click', () => {
    firstAvatar.style.display = 'none';
    secondAvatar.style.display = 'unset';
});

secondAvatar.addEventListener('click', () => {
    firstAvatar.style.display = 'unset';
    secondAvatar.style.display = 'none';
});

modifyBtn.addEventListener('click', () => {
    const newName = prompt('What is your name?');
    const newColor = prompt('What is your color?');
    name.innerHTML = newName;
    pinkBg.forEach(el => el.style.backgroundColor = newColor);
    pinkText.forEach(el => el.style.color = newColor);
    links.forEach(el => el.style.color = newColor);
});

liBtn.addEventListener('click', () => {
    li.forEach((el, i )=> {
        el.innerHTML = toolsArray[i];
    });
});

addBtn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    devTools.appendChild(newLi);
    input.value = '';
})
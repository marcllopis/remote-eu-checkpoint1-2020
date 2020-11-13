const firstAvatar = document.querySelector('.avatar');
const secondAvatar = document.querySelector('.avatar2');

firstAvatar.addEventListener('click', () => {
    firstAvatar.style.display = 'none';
    secondAvatar.style.display = 'unset';
});

secondAvatar.addEventListener('click', () => {
    firstAvatar.style.display = 'unset';
    secondAvatar.style.display = 'none';
});
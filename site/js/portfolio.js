const avatar = document.querySelector('.avatar');
const changePic = ['avatar-bis.png', './image/avatar.svg'];

const changeAvatar = () => {
    avatar.src = changePic[1];
}

// avatar.src = changeAvatar[0];
avatar.addEventListener('click', changeAvatar);













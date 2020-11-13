
/*image toggle */
// let imageToggle = false 
// let displayedImage = document.getElementById("pictureAvatar")
// displayedImage.addEventListener("click", () => {
//     imageToggle ? displayedImage= `url("./site/image/avatar-bis.png")` : displayedImage = `url("./site/image/avatar-bis.png")`
//     imageToggle=!imageToggle
// })



const pictureAvatar= document.getElementById("pictureAvatar");
const picLinks = ['site\image\avatar-bis.png','.\site\image\avatar.svg']
const changePicture = () => {
    pictureAvatar.src = picLinks[1];
};

pictureAvatar.src = picLinks[0];
pictureAvatar.addEventListener('click', changePicture);

const changePic = document.querySelector(".avatar2");
const image = document.getElementById("avatar");
let image2 = true;

changePic.addEventListener("click", function(e){
   if (image2){
     image.src="image/avatar.svg";
     image2 = false;
   } else {
     image.src="image/avatar-bis.png";
      image2 = true;
    }
  });

  
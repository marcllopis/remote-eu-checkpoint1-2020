const changePic = document.querySelector(".avatar");


changePic.addEventListener("click", function(e){
   console.log("hiii");
   if (isCatNaked){
     nakedCatImage.src = "image/logo-wcs.png";
     isCatNaked = false;
   } else {
     nakedCatImage.src = "image/avatar-bis.png";
      isCatNaked = true;
    }
  });
  
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

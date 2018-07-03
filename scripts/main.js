var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icon-hello.png') {
      myImage.setAttribute ('src','images/satan-coin.png');
    } else {
      myImage.setAttribute ('src','images/icon-hello.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Ты кто по жизни будешь?');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Здорова, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Здорова, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
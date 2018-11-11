const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  var requestURL = 'http://a.damoa.io:8080/site/1033';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();
  request.onload = function() {
    var siteInfoText = request.response;
    console.log(siteInfoText);
    siteInfo = JSON.parse(siteInfoText);
  };
  
}

init();

function injectItems(fileName) {
  chrome.tabs.executeScript(null, {file: fileName});
}

const fastfurious = document.getElementById('fastfurious');
const beemovie = document.getElementById('beemovie');
const shrek = document.getElementById('shrek');

function disableButtons() {
  fastfurious.setAttribute("disabled", "disabled");
  beemovie.setAttribute("disabled", "disabled");
  shrek.setAttribute("disabled", "disabled");
}

function sendItems(buttonName, fileName) {
  buttonName.addEventListener('click', () => {
    injectItems(fileName);
    disableButtons();
  });
}

sendItems(fastfurious, 'fastfurious.js');
sendItems(beemovie, 'beemovie.js');
sendItems(shrek, 'shrek.js');

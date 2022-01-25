'use strict'


let brandDark = document.querySelector('.brandDark')
let headerBar = document.querySelector('.headerBar');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
  brandDark.classList.toggle('hidden');
}


headerBar.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
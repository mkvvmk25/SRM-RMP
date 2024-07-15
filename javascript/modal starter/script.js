'use strict';

let showModalBtnList = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let closeModalBtn = document.querySelector('.close-modal');

function openModal() {
  // remove hidden modal
  modal.classList.remove('hidden');
  // ""   "  "      overlay
  overlay.classList.remove('hidden');
}

function closeModal() {
  // remove hidden modal
  modal.classList.add('hidden');
  // ""   "  "      overlay
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModalBtnList.length; i++) {
  showModalBtnList[i].addEventListener('click', function () {
    console.log('clicked');
    openModal();
  });
}

closeModalBtn.addEventListener('click', function () {
  console.log('clicked');
  closeModal();
});

overlay.addEventListener('click', function (event) {
  closeModal();
});

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});


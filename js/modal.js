'use strict';
console.log('modal.js file was loaded');

// taikomes
const els = {
  showBtn: document.getElementById('show'),
  modalEl: document.getElementById('modal'),
};

// event listeners

// functions

// showModal() - nuimti d-none nuo modalo
function showModal() {
  els.modalEl.classList.remove('d-none');
}

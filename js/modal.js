'use strict';
console.log('modal.js file was loaded');

// taikomes
const els = {
  showBtn: document.getElementById('show'),
  modalEl: document.getElementById('modal'),
  cancelBtn: document.getElementById('cancel'),
};

// event listeners
els.showBtn.addEventListener('click', showModal);
els.cancelBtn.addEventListener('click', hideModal);
// functions

// showModal() - nuimti d-none nuo modalo
function showModal() {
  els.modalEl.classList.remove('d-none');
}

// hideModal()
function hideModal() {
  els.modalEl.classList.add('d-none');
}

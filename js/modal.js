'use strict';
console.log('modal.js file was loaded');

// taikomes
const els = {
  showBtn: document.getElementById('show'),
  modalEl: document.getElementById('modal'),
  cancelBtn: document.getElementById('cancel'),
  backdropEl: document.getElementById('backdrop'),
};

// event listeners
els.showBtn.addEventListener('click', showModal);
els.cancelBtn.addEventListener('click', hideModal);
els.backdropEl.addEventListener('click', hideModal);

// functions

// showModal() - nuimti d-none nuo modalo
function showModal() {
  els.modalEl.classList.remove('d-none');
  els.backdropEl.classList.remove('d-none');
}

// hideModal()
function hideModal() {
  els.modalEl.classList.add('d-none');
  els.backdropEl.classList.add('d-none');
}

function displayInModal(title, subtitle) {
  els.modalEl.querySelector('h2').textContent = title;
  els.modalEl.querySelector('p').textContent = subtitle;
  showModal();
}

displayInModal('Svarbu', 'An apple a day you die anyway');

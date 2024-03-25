function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleCloseByEsc);
  popup.addEventListener('click', handleCloseByOverlay);
}

function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleCloseByEsc);
  popup.removeEventListener('click', handleCloseByOverlay);
}

function handleCloseByEsc(evt) {
  if(evt.key === 'Escape') {
      const popupIsOpen = document.querySelector('.popup_is-opened');
      closeModal(popupIsOpen);
  }
}

function handleCloseByOverlay(evt) {
  if(evt.target.classList.contains('popup')) {
      closeModal(evt.target);
  }
}

export { openModal, closeModal }; 

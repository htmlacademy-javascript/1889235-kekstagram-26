import { isEscapeKey } from './utils.js';

const popupContainer = document.querySelector('.big-picture');
// const commentsList = popupContainer.querySelector('.social__comments');

const popupPhoto = document.querySelector('.big-picture');
const popupPhotoOpen = document.querySelector('.pictures');//изменил
const popupPhotoClose = popupPhoto.querySelector('#picture-cancel');

const onPopupEsckeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

function popupOpen(evt) {
  popupPhoto.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEsckeydown);

  popupPhoto.querySelector('.social__comment-count').classList.remove('hidden');
  popupPhoto.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');


  if (evt.target.tagName === 'A') {
    popupContainer.querySelector('img').setAttribute('src', evt.target.src);
    // popupPhoto.querySelector('.likes-count').textContent = likes;
    // popupPhoto.querySelector('.comments-count').textContent = comments.length;
    // popupPhoto.querySelector('.social__caption').textContent = description;
    // commentsList.querySelectorAll('img').setAttribute('src', avatar);
    // commentsList.querySelectorAll('img').setAttribute('alt', name);
    // commentsList.querySelectorAll('p').textContent = message;

  }
}

function popupClose() {
  popupPhoto.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEsckeydown);

  document.querySelector('body').classList.remove('modal-open');
}

popupPhotoOpen.addEventListener('click', popupOpen);

popupPhotoClose.addEventListener('click', popupClose);

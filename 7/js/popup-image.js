import './rendering-photo.js';
import { isEscapeKey } from './utils.js';

const popupPhoto = document.querySelector('.big-picture');
const popupPhotoOpen = document.querySelector('kartinki');
const popupPhotoClose = popupPhoto.querySelector('#picture-cancel');

const onPopupEsckeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

function popupOpen() {
  popupPhoto.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEsckeydown);

  popupPhoto.querySelector('.social__comment-count').classList.remove('hidden');
  popupPhoto.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function popupClose() {
  popupPhoto.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEsckeydown);
}

popupPhotoOpen.addEventListener('click', popupOpen);

popupPhotoClose.addEventListener('click', popupClose);

// const popupPhotos = SIMILAR_OBJECTS(25);

// popupPhotos.forEach(({ url, likes, avatar, name, message, comments, description }) => {
//   bigPicture.querySelector('img').setAttribute('src', url);
//   popupPhoto.querySelector('.likes-count').textContent = likes;
//   popupPhoto.querySelector('.comments-count').textContent = comments.length;
//   popupPhoto.querySelector('.social__caption').textContent = description;
//   commentsList.querySelectorAll('img').setAttribute('src', avatar);
//   commentsList.querySelectorAll('img').setAttribute('alt', name);
//   commentsList.querySelectorAll('p').textContent = message;
// });


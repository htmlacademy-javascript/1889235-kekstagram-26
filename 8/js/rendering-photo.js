import { SIMILAR_OBJECTS } from './data.js';
import { popupOpen, popupClose, popupPhotoContainer } from './popup-image.js';

export const miniatures = SIMILAR_OBJECTS(25);

export const renderingPhoto = () => {
  const pictureContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const popupPhotoOpen = document.querySelector('.pictures');
  const popupPhotoClose = popupPhotoContainer.querySelector('#picture-cancel');

  const fragment = document.createDocumentFragment();

  miniatures.forEach(({ url, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('src', url);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    fragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(fragment);

  popupPhotoOpen.addEventListener('click', popupOpen);

  popupPhotoClose.addEventListener('click', popupClose);
};

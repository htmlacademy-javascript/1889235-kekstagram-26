import { isEscapeKey } from './utils.js';
import { miniatures } from './rendering-photo.js';

const popupPhotoContainer = document.querySelector('.big-picture');
const commentList = popupPhotoContainer.querySelector('.social__comments');

const onPopupEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

function popupOpen(evt) {
  popupPhotoContainer.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEsc);

  popupPhotoContainer.querySelector('.social__comment-count').classList.remove('hidden');
  popupPhotoContainer.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  if (evt.target.tagName === 'IMG') {
    const popupImageClick = miniatures.find(({ url }) => `${window.origin}/${url}` === evt.target.src);
    const { likes, comments, description } = popupImageClick;
    document.querySelector('.big-picture__img img').setAttribute('src', evt.target.src);
    popupPhotoContainer.querySelector('.likes-count').textContent = likes;
    popupPhotoContainer.querySelector('.comments-count').textContent = comments.length;
    popupPhotoContainer.querySelector('.social__caption').textContent = description;

    comments.forEach((element) => {
      const containerPopup = document.createElement('li');
      containerPopup.classList.add('social__comment');
      const containerElementPopup = document.createElement('img');
      const containerElementPopupText = document.createElement('`p`');
      containerElementPopup.classList.add('social__picture');
      containerElementPopup.setAttribute('src', element.avatar);
      containerElementPopup.setAttribute('alt', element.name);
      containerElementPopup.setAttribute('width', '35');
      containerElementPopup.setAttribute('height', '35');
      containerElementPopupText.classList.add('social__text');
      containerElementPopupText.textContent = element.message;
      containerPopup.appendChild(containerElementPopup);
      containerPopup.appendChild(containerElementPopupText);
      commentList.appendChild(containerPopup);
    });
  }
}

function popupClose() {
  popupPhotoContainer.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEsc);

  document.querySelector('body').classList.remove('modal-open');

  while (commentList.firstChild) {
    commentList.removeChild(commentList.firstChild);
  }
}

export { popupOpen, popupClose, popupPhotoContainer };

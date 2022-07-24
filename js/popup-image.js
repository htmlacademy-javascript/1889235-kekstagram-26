import { isEscapeKey } from './utils.js';
import { miniatures } from './rendering-photo.js';

const popupContainer = document.querySelector('.big-picture');
const commentsList = popupContainer.querySelector('.social__comments');

const popupPhoto = document.querySelector('.big-picture');


const onPopupEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

function popupOpen(evt) {
  popupPhoto.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEsc);

  popupPhoto.querySelector('.social__comment-count').classList.remove('hidden');
  popupPhoto.querySelector('.comments-loader').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  if (evt.target.tagName === 'IMG') {
    const qwe = miniatures.find(({ url }) => `${window.origin}/${url}` === evt.target.src);
    const { likes, comments, description } = qwe;
    document.querySelector('.big-picture__img img').setAttribute('src', evt.target.src);
    popupPhoto.querySelector('.likes-count').textContent = likes;
    popupPhoto.querySelector('.comments-count').textContent = comments.length;
    popupPhoto.querySelector('.social__caption').textContent = description;
    comments.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add('social__comment');
      const img = document.createElement('img');
      const p = document.createElement('p');
      img.classList.add('social__picture');
      img.setAttribute('src', element.avatar);
      img.setAttribute('alt', element.name);
      img.setAttribute('width', '35');
      img.setAttribute('height', '35');
      p.classList.add('social__text');
      p.textContent = element.message;
      li.appendChild(img);
      li.appendChild(p);
      commentsList.appendChild(li);
    });
  }
}

function popupClose() {
  popupPhoto.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEsc);

  document.querySelector('body').classList.remove('modal-open');
  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }
}

export { popupOpen, popupClose, popupPhoto };

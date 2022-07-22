// import { SIMILAR_OBJECTS } from './data.js';
// const commentsList = popupPhoto.querySelectorAll('.social__comment');
// const bigPicture = popupPhoto.querySelector('.big-picture__img');
const containerImages = ;

const popupPhoto = document.querySelector('.big-picture');
const popupPhotoApparent = () => popupPhoto.classList.remove('hidden');

popupPhoto.addEventListener('click', popupPhotoApparent);


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

// popupPhoto.querySelector('.social__comment-count').classList.remove('hidden');
// popupPhoto.querySelector('.comments-loader').classList.remove('hidden');
// document.querySelector('body').classList.add('modal-open');

// export { popupPhotos };


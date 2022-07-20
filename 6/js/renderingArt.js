import { SIMILAR_OBJECTS } from './data';

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniatures = SIMILAR_OBJECTS(25);

const fragment = document.createDocumentFragment();

miniatures.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  fragment.appendChild(pictureElement);
});

container.appendChild(fragment);

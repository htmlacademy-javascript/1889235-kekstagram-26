import { getCreateArray, getRandomArrayElement } from './utils';

const LIKES = getCreateArray(15, 200);
const AVATARS = getCreateArray(1, 6);
const DESCRIPTIONS = ['Красивый вид', 'Замечательный день', 'Хорошая погода'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',];
const NAMES = ['Иван', 'Игорь', 'Настя', 'Роман',];
// const SIMILAR_OBJECT_COUNT = 25;

const createObject = (id, photos) => ({
  id,
  url: `photos/${photos}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(LIKES),
  comments: [
    {
      id,
      avatar: `img/avatar-${getRandomArrayElement(AVATARS)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },
  ],
});

const getSeuence = (count) => {
  const objects = [];
  for (let i = 1; i <= count; i++) {
    objects.push(createObject(i, i));
  }
  return objects;
};

const SIMILAR_OBJECTS = (count) => getSeuence(count);

export { SIMILAR_OBJECTS };

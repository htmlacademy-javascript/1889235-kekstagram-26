const getCreateArray = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);

const LIKES = getCreateArray(15, 200);
const AVATARS = getCreateArray(1, 6);
const DESCRIPTIONS = ['Красивый вид', 'Замечательный день', 'Хорошая погода'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',];
const NAMES = ['Иван', 'Игорь', 'Настя', 'Роман',];
const SIMILAR_OBJECT_COUNT = 25;

const checkStringLength = (string, length) => string.length <= length;
checkStringLength('Hello world', 10);

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

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

const SIMILAR_OBJECT = getSeuence(SIMILAR_OBJECT_COUNT);
SIMILAR_OBJECT();

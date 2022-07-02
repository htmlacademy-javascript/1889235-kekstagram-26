const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;
checkStringLength('Hello world', 10);

const getCreateArray = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);

const IDENTIFIERS = getCreateArray(1, 25);
// const PHOTOS = getCreateArray(1, 25);
const LIKES = getCreateArray(15, 200);
const ID_COMMENTS = getCreateArray(1, 1000);
const DESCRIPTIONS = ['Красивый вид', 'Замечательный день', 'Хорошая погода'];
// const AVATARS = getCreateArray(1, 6);
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',];
const NAMES = ['Иван', 'Игорь', 'Настя', 'Роман',];
const SIMILAR_OBJECT_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const createObject = () => ({
  id: getRandomArrayElement(IDENTIFIERS),
  url: 'photos/getRandomArrayElement(PHOTOS).jpg',
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(LIKES),
  comments: [
    {
      id: getRandomArrayElement(ID_COMMENTS),
      avatar: 'img/avatar-getRandomArrayElement(AVATARS).svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },
    {
      id: getRandomArrayElement(ID_COMMENTS),
      avatar: 'img/avatar-getRandomArrayElement(AVATARS).svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    }
  ],
});
const similarObjects = Array.from({ length: SIMILAR_OBJECT_COUNT }, createObject);
similarObjects();

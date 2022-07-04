const getCreateArray = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;
checkStringLength('Hello world', 10);

const IDENTIFIERS = getCreateArray(1, 25);
const PHOTOS = getCreateArray(1, 25);
const LIKES = getCreateArray(25, 200);
const ID_COMMENTS = getCreateArray(1, 1000);
const DESCRIPTIONS = ['Красивый вид', 'Замечательный день', 'Хорошая погода'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',];
const NAMES = ['Иван', 'Игорь', 'Настя', 'Роман',];
const SIMILAR_OBJECT_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomNum = (array) => {
  const randomIndex = getRandomInt(0, array.length - 1);
  const randomNumber = array[randomIndex];
  array.splice(randomIndex, 1);
  return randomNumber;
};

const createObject = () => ({
  id: getRandomNum(IDENTIFIERS),
  url: `photos/${getRandomNum(PHOTOS)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNum(LIKES),
  comments: [
    {
      id: getRandomNum(ID_COMMENTS),
      avatar: `img/avatar-${getCreateArray(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },
    {
      id: getRandomNum(ID_COMMENTS),
      avatar: `img/avatar-${getCreateArray(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    }
  ],
});
const similarObjects = Array.from({ length: SIMILAR_OBJECT_COUNT }, createObject);
similarObjects();

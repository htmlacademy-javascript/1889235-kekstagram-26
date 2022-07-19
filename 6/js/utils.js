const checkStringLength = (string, length) => string.length <= length;

const getCreateArray = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export { getCreateArray, getRandomArrayElement, checkStringLength };


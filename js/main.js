const getRandomInt = (arg1, arg2) => {
  const fromNumber = Math.min(arg1, arg2);
  const toNumber = Math.max(arg1, arg2);
  return Math.floor(fromNumber + Math.random() * (toNumber + 1 - fromNumber));
};
getRandomInt(1, 3);

const getStringLength = (string, maxlength) => string.length <= maxlength;
getStringLength('Hello world', 10);
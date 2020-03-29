import predicates from './predicates.js';

const { isCommonDivider } = predicates;

const getRandomNumber = (num) => Math.floor(Math.random() * num);

const getProgressionValue = (start, index, diff) => start + index * diff;

const getProgression = () => {
  const length = 10;
  const progression = [];
  const start = getRandomNumber(30);
  const diff = getRandomNumber(10);

  for (let i = 0; i < length; i += 1) {
    progression.push(getProgressionValue(start, i, diff));
  }

  return progression;
};

const getLimitedNumber = (number, limitation) => (
  number - Math.floor(number / limitation) * limitation
);

const getWrappedResult = (result) => (result ? 'yes' : 'no');

const getGcd = (...args) => {
  let gcd = Math.min(...args);

  while (!isCommonDivider(gcd, [...args]) && gcd > 0) {
    gcd -= 1;
  }

  return gcd;
};

export default {
  getRandomNumber,
  getProgressionValue,
  getProgression,
  getLimitedNumber,
  getWrappedResult,
  getGcd,
};

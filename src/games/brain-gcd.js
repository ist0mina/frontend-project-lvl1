import pairs from '@hexlet/pairs';
import game from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'Find the greatest common divisor of given numbers.';

const isCommonDivider = (divider, numbers = []) => (
  numbers.every((number) => number % divider === 0)
);

const getGcd = (...args) => {
  let gcd = Math.min(...args);

  while (!isCommonDivider(gcd, [...args]) && gcd > 0) {
    gcd -= 1;
  }

  return gcd;
};

const getLogic = () => {
  const numbers = [getRandom(1, 100), getRandom(1, 100)];
  const question = numbers.join(' ');
  const correct = getGcd(...numbers).toString();
  return cons(question, correct);
};

export default () => {
  game(description, getLogic);
};

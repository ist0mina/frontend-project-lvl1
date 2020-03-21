import pair from '@hexlet/pairs';
import game, { getRandomNumber } from '../engine/index.js';

const { cons } = pair;

const rules = 'Find the greatest common divisor of given numbers.';

const isDivider = (divider, numbers = []) => numbers.every((number) => number % divider === 0);

const getGcd = (...args) => {
  let gcd = Math.min(...args);

  while (!isDivider(gcd, [...args]) && gcd > 0) {
    gcd -= 1;
  }

  return gcd;
};

const getQuestion = () => {
  const numbers = [getRandomNumber(100), getRandomNumber(100)];
  return numbers.join(' ');
};

const getCorrect = (question) => {
  const numbers = question.split(' ');
  return getGcd(...numbers).toString();
};

const conditionPair = cons(getQuestion, getCorrect);

export default () => {
  game(rules, conditionPair);
};

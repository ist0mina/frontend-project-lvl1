import pairs from '@hexlet/pairs';
import game from '../index.js';
import utils from '../utils.js';

const { getRandom } = utils;

const { cons } = pairs;

const rules = 'Find the greatest common divisor of given numbers.';

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

const getQuestion = () => {
  const numbers = [getRandom(1, 100), getRandom(1, 100)];
  return numbers.join(' ');
};

const getCorrect = (question) => {
  const numbers = question.split(' ');
  return getGcd(...numbers);
};

export default () => {
  game(rules, () => {
    const question = getQuestion();
    const correct = getCorrect(question);
    return cons(question, correct);
  });
};

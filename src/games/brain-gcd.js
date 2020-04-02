import game, { getRandomNumber, createQuestions } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const countQuestions = 3;

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
  const numbers = [getRandomNumber(100), getRandomNumber(100)];
  return numbers.join(' ');
};

const getCorrect = (question) => {
  const numbers = question.split(' ');
  return getGcd(...numbers);
};

export default () => {
  const questions = createQuestions(countQuestions, getQuestion, getCorrect);
  game(rules, questions);
};

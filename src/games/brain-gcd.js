import startGame from '../engine/index.js';
import helpers from '../helpers/index.js';

const { getRandomNumber, getGcd } = helpers;

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const numbers = [getRandomNumber(100), getRandomNumber(100)];
  return numbers.join(' ');
};

const getCorrect = (question) => {
  const numbers = question.split(' ');
  return getGcd(...numbers);
};

export default () => {
  startGame(rules, getQuestion, getCorrect);
};

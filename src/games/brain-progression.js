import startGame from '../engine/index.js';
import helpers from '../helpers/index.js';

const {
  getRandomNumber,
  getProgression,
  getProgressionValue,
  getLimitedNumber,
} = helpers;

const rules = 'What number is missing in the progression?';

const empty = '..';

const getQuestion = () => {
  const progression = getProgression();
  const index = getRandomNumber(10);

  progression[index] = empty;

  return progression.join(' ');
};

const getCorrect = (question) => {
  const numbers = question.split(' ');
  const emptyIndex = numbers.findIndex((number) => number === empty);
  const { length } = numbers;

  const start = +numbers[emptyIndex === 0 ? 1 : 0];
  const index = emptyIndex === 0 ? -1 : emptyIndex;
  const indexMinuend = getLimitedNumber(emptyIndex + 2, length);
  const indexSubtrahend = Math.abs(indexMinuend - 1);

  const diff = Math.abs(+numbers[indexMinuend] - (+numbers[indexSubtrahend]));

  return getProgressionValue(start, index, diff);
};

export default () => {
  startGame(rules, getQuestion, getCorrect);
};

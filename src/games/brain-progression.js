import pairs from '@hexlet/pairs';
import game, { getRandomNumber } from '../engine/index.js';

const { cons } = pairs;

const rules = 'What number is missing in the progression?';

const empty = '..';

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

const getQuestion = () => {
  const progression = getProgression();
  const index = getRandomNumber(10);

  progression[index] = empty;

  return progression.join(' ');
};

const getLimitedNumber = (number, limitation) => (
  number - Math.floor(number / limitation) * limitation
);

const getCorrect = (question) => {
  const numbers = question.split(' ');
  const emptyIndex = numbers.findIndex((number) => number === empty);
  const { length } = numbers;

  const start = +numbers[emptyIndex === 0 ? 1 : 0];
  const index = emptyIndex === 0 ? -1 : emptyIndex;
  const indexMinuend = getLimitedNumber(index + 2, length - 2);
  const indexSubtrahend = getLimitedNumber(index + 1, length - 2);
  const diff = +numbers[indexMinuend] - (+numbers[indexSubtrahend]);

  const value = getProgressionValue(start, index, diff);

  return value.toString();
};

const conditionPairs = cons(getQuestion, getCorrect);

export default () => {
  game(rules, conditionPairs);
};

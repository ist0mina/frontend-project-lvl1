import game, { getRandomNumber, createQuestions } from '../index.js';

const rules = 'What number is missing in the progression?';

const empty = '..';

const countQuestions = 3;

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
  const questions = createQuestions(countQuestions, getQuestion, getCorrect);
  game(rules, questions);
};

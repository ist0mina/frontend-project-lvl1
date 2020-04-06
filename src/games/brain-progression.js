import pairs from '@hexlet/pairs';
import game from '../index.js';
import utils from '../utils.js';

const { getRandom } = utils;

const { cons } = pairs;

const rules = 'What number is missing in the progression?';

const empty = '..';

const getProgressionValue = (start, index, diff) => start + index * diff;

const getProgression = () => {
  const length = 10;
  const progression = [];
  const start = getRandom(1, 30);
  const diff = getRandom(1, 9);

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
  const index = getRandom(0, 9);

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
  game(rules, () => {
    const question = getQuestion();
    const correct = getCorrect(question);
    return cons(question, correct);
  });
};

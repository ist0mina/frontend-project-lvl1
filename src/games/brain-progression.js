import pairs from '@hexlet/pairs';
import game from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const length = 10;
  const progression = [];
  const start = getRandom(1, 30);
  const diff = getRandom(1, 9);

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff);
  }

  return progression;
};

const getLogic = () => {
  const progression = getProgression();
  const index = getRandom(0, 9);
  const correct = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return cons(question, correct);
};

export default () => {
  game(description, getLogic);
};

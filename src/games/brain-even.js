import pairs from '@hexlet/pairs';
import game from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getLogic = () => {
  const question = getRandom(1, 100);
  const correct = isEven(question) ? 'yes' : 'no';
  return cons(question, correct);
};

export default () => {
  game(description, getLogic);
};

import pairs from '@hexlet/pairs';
import runGame from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const genRoundData = () => {
  const number = getRandom(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  runGame(description, genRoundData);
};

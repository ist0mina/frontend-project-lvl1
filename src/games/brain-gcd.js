import pairs from '@hexlet/pairs';
import runGame from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const genRoundData = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return cons(question, correctAnswer);
};

export default () => {
  runGame(description, genRoundData);
};

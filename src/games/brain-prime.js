import pairs from '@hexlet/pairs';
import game from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  if (number % 2 === 0) {
    return number === 2;
  }

  let divider = 3;

  while (divider * divider <= number && number % divider !== 0) {
    divider += 2;
  }

  return divider * divider > number;
};

const genRoundData = () => {
  const number = getRandom(1, 50);
  const question = number.toString();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  game(description, genRoundData);
};

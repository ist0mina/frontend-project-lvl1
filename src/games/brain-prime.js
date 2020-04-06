import pairs from '@hexlet/pairs';
import game from '../index.js';
import utils from '../utils.js';

const { getRandom } = utils;

const { cons } = pairs;

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getQuestion = () => getRandom(1, 50);

const getCorrect = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => {
  game(rules, () => {
    const question = getQuestion();
    const correct = getCorrect(question);
    return cons(question, correct);
  });
};

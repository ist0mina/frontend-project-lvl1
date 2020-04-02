import game, { getRandomNumber, createQuestions } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const countQuestions = 3;

const isPrime = (number) => {
  if (number % 2 === 0) {
    return number === 2;
  }

  let divider = 3;

  while (divider * divider <= number && number % divider !== 0) {
    divider += 2;
  }

  return divider * divider > number;
};

const getQuestion = () => getRandomNumber(100);

const getCorrect = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => {
  const questions = createQuestions(countQuestions, getQuestion, getCorrect);
  game(rules, questions);
};

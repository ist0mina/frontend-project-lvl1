import game, { getRandomNumber, createQuestions } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const countQuestions = 3;

const isEven = (number) => number % 2 === 0;

const getQuestion = () => getRandomNumber(100);

const getCorrect = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  const questions = createQuestions(countQuestions, getQuestion, getCorrect);
  game(rules, questions);
};

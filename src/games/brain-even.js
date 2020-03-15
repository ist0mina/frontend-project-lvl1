import pairs from '@hexlet/pairs';
import game, { getRandomNumber } from '../engine/index.js';

const { cons } = pairs;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomNumber(100);

const isEven = (num) => num % 2 === 0;

const getCorrect = (num) => (isEven(num) ? 'yes' : 'no');

const conditionPair = cons(getQuestion, getCorrect);

export default () => {
  game(rules, conditionPair);
};

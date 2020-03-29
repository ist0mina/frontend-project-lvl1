import startGame from '../engine/index.js';
import helpers from '../helpers/index.js';

const { getRandomNumber, isEven, getWrappedResult } = helpers;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomNumber(100);

const getCorrect = (num) => getWrappedResult(isEven(num));

export default () => {
  startGame(rules, getQuestion, getCorrect);
};

import startGame from '../engine/index.js';
import helpers from '../helpers/index.js';

const { getRandomNumber, isPrime, getWrappedResult } = helpers;

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => getRandomNumber(100);

const getCorrect = (question) => getWrappedResult(isPrime(question));

export default () => {
  startGame(rules, getQuestion, getCorrect);
};

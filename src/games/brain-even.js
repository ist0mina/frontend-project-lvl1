import pairs from '@hexlet/pairs';
import game from '../index.js';
import utils from '../utils.js';

const { getRandom } = utils;

const { cons } = pairs;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => getRandom(1, 100);

const getCorrect = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  game(rules, () => {
    const question = getQuestion();
    const correct = getCorrect(question);
    return cons(question, correct);
  });
};

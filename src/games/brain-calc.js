import pairs from '@hexlet/pairs';
import game from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'What is the result of the expression?';

const operations = [
  {
    sign: '+',
    operand2: {
      min: 1,
      max: 100,
    },
    calculate: (operand1, operand2) => operand1 + operand2,
  },
  {
    sign: '-',
    operand2: {
      min: 0,
      max: 50,
    },
    calculate: (operand1, operand2) => operand1 - operand2,
  },
  {
    sign: '*',
    operand2: {
      min: 1,
      max: 10,
    },
    calculate: (operand1, operand2) => operand1 * operand2,
  },
];

const getLogic = () => {
  const index = getRandom(0, 2);
  const { sign, operand2: { min, max }, calculate } = operations[index];
  const operand1 = getRandom(1, 100);
  const operand2 = getRandom(min, max);
  const question = `${operand1} ${sign} ${operand2}`;
  const correct = calculate(operand1, operand2).toString();
  return cons(question, correct);
};

export default () => {
  game(description, getLogic);
};

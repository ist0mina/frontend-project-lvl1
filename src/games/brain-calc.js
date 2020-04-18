import pairs from '@hexlet/pairs';
import runGame from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'What is the result of the expression?';

const operations = [
  {
    operator: '+',
    min: 1,
    max: 100,
    calculate: (operand1, operand2) => operand1 + operand2,
  },
  {
    operator: '-',
    min: 1,
    max: 50,
    calculate: (operand1, operand2) => operand1 - operand2,
  },
  {
    operator: '*',
    min: 1,
    max: 10,
    calculate: (operand1, operand2) => operand1 * operand2,
  },
];

const genRoundData = () => {
  const indexOperation = getRandom(0, operations.length - 1);
  const {
    operator,
    min,
    max,
    calculate,
  } = operations[indexOperation];
  const operand1 = getRandom(min, max);
  const operand2 = getRandom(min, max);
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculate(operand1, operand2).toString();
  return cons(question, correctAnswer);
};

export default () => {
  runGame(description, genRoundData);
};

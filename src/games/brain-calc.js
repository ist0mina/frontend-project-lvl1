import pairs from '@hexlet/pairs';
import game from '../index.js';
import utils from '../utils.js';

const { getRandom } = utils;

const { cons } = pairs;

const rules = 'What is the result of the expression?';

const signs = [
  {
    sign: '+',
    getOperand2: () => getRandom(1, 100),
    calculate: (operand1, operand2) => operand1 + operand2,
  },
  {
    sign: '-',
    getOperand2: (operand1) => getRandom(0, operand1),
    calculate: (operand1, operand2) => operand1 - operand2,
  },
  {
    sign: '*',
    getOperand2: () => getRandom(1, 10),
    calculate: (operand1, operand2) => operand1 * operand2,
  },
];

const getQuestion = () => {
  const signIndex = getRandom(0, 2);
  const operand1 = getRandom(1, 100);
  const operand2 = signs[signIndex].getOperand2(operand1);
  return `${operand1} ${signs[signIndex].sign} ${operand2}`;
};

const getCorrect = (question) => {
  const expressionParts = question.split(' ');
  const [operand1, sign, operand2] = expressionParts;

  const signBehavior = signs.find((behavior) => behavior.sign === sign);

  if (signBehavior) {
    return signBehavior.calculate(+operand1, +operand2);
  }

  return null;
};

export default () => {
  game(rules, () => {
    const question = getQuestion();
    const correct = getCorrect(question);
    return cons(question, correct);
  });
};

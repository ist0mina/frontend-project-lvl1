import starGame from '../engine/index.js';
import helpers from '../helpers/index.js';

const { getRandomNumber } = helpers;

const rules = 'What is the result of the expression?';

const getOperand = (maxNumber) => getRandomNumber(maxNumber);
const getSignIndex = () => getRandomNumber(3);

const signs = [
  {
    sign: '+',
    getOperand2: () => getOperand(100),
    calculate: (operand1, operand2) => operand1 + operand2,
  },
  {
    sign: '-',
    getOperand2: (operand1) => getOperand(operand1),
    calculate: (operand1, operand2) => operand1 - operand2,
  },
  {
    sign: '*',
    getOperand2: () => getOperand(10),
    calculate: (operand1, operand2) => operand1 * operand2,
  },
];

const getQuestion = () => {
  const signIndex = getSignIndex();
  const operand1 = getOperand(100);
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
  starGame(rules, getQuestion, getCorrect);
};

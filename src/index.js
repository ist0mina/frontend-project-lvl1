import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const {
  car,
  cdr,
  isPair,
} = pairs;

const countRounds = 3;

const getUserName = () => readlineSync.question('May I have your name? ');

const isCorrectAnswer = (answer, correct) => {
  const pefAnswer = typeof correct === 'number' && !Number.isNaN(Number(answer)) && answer !== '' ? +answer : answer;
  return pefAnswer === correct;
};

const isValidGame = (rules, getLogic) => rules !== '' && typeof getLogic === 'function' && isPair(getLogic());

const play = (getLogic, round = 0) => {
  if (round === countRounds) {
    return true;
  }

  const pair = getLogic();
  const question = car(pair);
  const correct = cdr(pair);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (isCorrectAnswer(answer, correct)) {
    console.log('Correct!');
    return play(getLogic, round + 1);
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
  return false;
};

const printResult = (isWin, user) => {
  if (isWin) {
    console.log(`Congratulations, ${user}!`);
    return;
  }

  console.log(`Let's try again, ${user}!`);
};

const game = (rules = '', getLogic) => {
  console.log('Welcome to the Brain Games!');

  const user = getUserName();

  console.log(`Hello, ${user}!`);

  if (!isValidGame(rules, getLogic)) {
    return;
  }

  console.log(rules);

  const isWin = play(getLogic);

  printResult(isWin, user);
};

export default game;

import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const { isPair, car, cdr } = pairs;

const ROUNDS = 3;

const getUserName = () => readlineSync.question('May I have your name? ');

const play = (roundCounter, conditionPair) => {
  if (roundCounter === ROUNDS) {
    return true;
  }

  const getQuestion = car(conditionPair);
  const question = getQuestion();

  const getCorrect = cdr(conditionPair);
  const correct = getCorrect(question);

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correct) {
    console.log('Correct!');
    return play(roundCounter + 1, conditionPair);
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);

  return false;
};

const isValidGame = (rules, conditionPair) => rules !== '' && isPair(conditionPair) && typeof car(conditionPair) === 'function' && typeof cdr(conditionPair) === 'function';

export const getRandomNumber = (num) => Math.floor(Math.random() * num);

export default (rules, conditionPair) => {
  console.log('Welcome to the Brain Games!');

  const user = getUserName();

  console.log(`Hello, ${user}!`);

  if (!isValidGame(rules, conditionPair)) {
    return;
  }

  console.log(rules);  

  const isWin = play(0, conditionPair);

  if (isWin) {
    console.log(`Congratulations, ${user}!`);
    return;
  }

  console.log(`Let's try again, ${user}!`);
};

import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const {
  car,
  cdr,
  isPair,
  cons,
} = pairs;

export const getRandomNumber = (num) => Math.floor(Math.random() * num);

export const createQuestions = (count, getQuestion, getCorrect) => {
  if (typeof getQuestion !== 'function' && typeof getCorrect !== 'function') {
    return [];
  }

  const questions = [];
  for (let i = 0; i < count; i += 1) {
    const question = getQuestion();
    const pair = cons(question, getCorrect(question));
    questions.push(pair);
  }

  return questions;
};

const getUserName = () => readlineSync.question('May I have your name? ');

const isCorrectAnswer = (answer, correct) => {
  const pefAnswer = typeof correct === 'number' && !Number.isNaN(Number(answer)) && answer !== '' ? +answer : answer;
  return pefAnswer === correct;
};

const isValidQuestions = (questions = []) => (
  questions.length > 0 && questions.every((question) => isPair(question))
);

const play = (questions) => {
  if (!isValidQuestions(questions)) {
    return false;
  }

  for (let i = 0; i < questions.length; i += 1) {
    const pair = questions[i];
    const question = car(pair);
    const correct = cdr(pair);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (!isCorrectAnswer(answer, correct)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
};

const printResult = (isWin, user) => {
  if (isWin) {
    console.log(`Congratulations, ${user}!`);
    return;
  }

  console.log(`Let's try again, ${user}!`);
};

const game = (rules = '', questions = []) => {
  console.log('Welcome to the Brain Games!');

  const user = getUserName();

  console.log(`Hello, ${user}!`);

  if (!isValidQuestions(questions)) {
    return;
  }

  console.log(rules);

  const isWin = play(questions);

  printResult(isWin, user);
};

export default game;

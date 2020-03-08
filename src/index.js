import readlineSync from 'readline-sync';

const printTitle = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const greeting = () => {
  printTitle();
  getUserName();
};

const isEven = (num) => num % 2 === 0;

const ask = (level) => {
  if (level > 2) {
    return true;
  }

  const num = Math.floor(Math.random(100) * 100);

  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');
  const correntAnswer = isEven(num) ? 'yes' : 'no';

  if (answer === correntAnswer) {
    console.log('Correct!');
    return ask(level + 1);
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correntAnswer}".`);

  return false;
};

const askQuestions = (user) => {
  const isWin = ask(0);

  if (isWin) {
    console.log(`Congratulations, ${user}!`);
    return;
  }

  console.log(`Let's try again, ${user}!`);
};

export const brainEvenGame = () => {
  printTitle();

  const user = getUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  askQuestions(user);
};

export default greeting;

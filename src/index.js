import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const { car, cdr } = pairs;

const countRounds = 3;

const game = (description, getLogic) => {
  console.log('Welcome to the Brain Games!');

  const user = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${user}!`);

  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const pair = getLogic();
    const question = car(pair);
    const correct = cdr(pair);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correct) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
      console.log(`Let's try again, ${user}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${user}!`);
};

export default game;

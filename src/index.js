import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const { car, cdr } = pairs;

const countRounds = 3;

const runGame = (description, genRoundData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const pair = genRoundData();
    const question = car(pair);
    const correctAnswer = cdr(pair);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;

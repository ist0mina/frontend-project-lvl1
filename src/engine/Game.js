import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const {
  car,
  cdr,
  cons,
  isPair,
} = pairs;

const getUserName = () => readlineSync.question('May I have your name? ');

const ROUNDS = 3;

class Game {
  constructor(rules, logic) {
    this.rules = rules;
    this.logic = logic;
  }

  get isValid() {
    return this.rules !== '' && this.logic && this.logic.isValid;
  }

  greeting() {
    console.log('Welcome to the Brain Games!');
    this.user = getUserName();
    console.log(`Hello, ${this.user}!`);
  }

  printRules() {
    console.log(this.rules);
  }

  askQuestion() {
    if (!this.isValid) {
      return null;
    }

    const questionPair = this.logic.askQuestion();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (typeof correctAnswer === 'number' && !Number.isNaN(Number(userAnswer)) && userAnswer !== '') {
      return cons(+userAnswer, correctAnswer);
    }

    return cons(userAnswer, correctAnswer);
  }

  playRound(currentRound = 0) {
    if (currentRound === ROUNDS) {
      return true;
    }

    const answerPair = this.askQuestion();

    if (!isPair(answerPair)) {
      return false;
    }

    const userAnswer = car(answerPair);
    const correctAnswer = cdr(answerPair);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return this.playRound(currentRound + 1);
    }

    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

    return false;
  }

  printSuccess() {
    console.log(`Congratulations, ${this.user}!`);
  }

  printFail() {
    console.log(`Let's try again, ${this.user}!`);
  }

  printResult(isWin) {
    if (isWin) {
      this.printSuccess();
      return;
    }

    this.printFail();
  }

  run() {
    this.greeting();

    if (!this.isValid) {
      return;
    }

    this.printRules();

    const isWinGame = this.playRound();

    this.printResult(isWinGame);
  }
}

export default Game;

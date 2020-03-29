import pairs from '@hexlet/pairs';

const { cons } = pairs;

class GameLogic {
  constructor(getQuestion, getCorrect) {
    this.getQuestion = getQuestion;
    this.getCorrect = getCorrect;
  }

  get isValid() {
    return typeof this.getQuestion === 'function' && typeof this.getCorrect === 'function';
  }

  askQuestion() {
    if (!this.isValid) {
      return null;
    }

    const question = this.getQuestion();
    const correct = this.getCorrect(question);
    return cons(question, correct);
  }
}

export default GameLogic;

import Game from './Game.js';
import GameLogic from './GameLogic.js';

const startGame = (rules, getQuestion, getCorrect) => {
  const gameLogic = new GameLogic(getQuestion, getCorrect);
  const game = new Game(rules, gameLogic);
  game.run();
};

export default startGame;

import pairs from '@hexlet/pairs';
import runGame from '../index.js';
import getRandom from '../utils.js';

const { cons } = pairs;

const description = 'What number is missing in the progression?';

const LENGTH_PROGRESSION = 10;

const getProgression = (firstMember, differenсe, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstMember + i * differenсe);
  }

  return progression;
};

const genRoundData = () => {
  const progression = getProgression(getRandom(1, 30), getRandom(1, 9), LENGTH_PROGRESSION);
  const hiddenMemberIndex = getRandom(0, LENGTH_PROGRESSION - 1);
  const correctAnswer = progression[hiddenMemberIndex].toString();
  progression[hiddenMemberIndex] = '..';
  const question = progression.join(' ');
  return cons(question, correctAnswer);
};

export default () => {
  runGame(description, genRoundData);
};

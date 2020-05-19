
import gameRun from '../index.js';
import genRandomNumber from '../utils.js';


const genProgression = (firstElement, difference, progressionLength) => {
  const progression = [firstElement];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + difference;
  }
  return progression;
};


const progressionLength = 10;

const genGameData = () => {
  const firstElement = genRandomNumber(0, 100);
  const difference = genRandomNumber(1, 10);
  const progression = genProgression(firstElement, difference, progressionLength);
  const hiddenElementIndex = genRandomNumber(0, progressionLength - 1);
  const answer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression;
  return [question.join(' '), String(answer)];
};

const description = 'What number is missing in the progression?';

const startProgression = () => gameRun(description, genGameData);

export default startProgression;

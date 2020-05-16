
import gameRun from '../index.js';
import genRandomNumber from '../utils.js';


const genProgression = (firstElement, difference, progressionLength) => {
  const arr = [];
  arr[0] = firstElement;
  for (let i = 1; i < progressionLength; i += 1) {
    arr[i] = arr[i - 1] + difference;
  }
  return arr;
};

const genQuestion = (arr, index) => {
  const newArr = [...arr];
  newArr[index] = '..';
  return newArr;
};

const genGameData = () => {
  const firstElement = genRandomNumber(0, 100);
  const difference = genRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = genProgression(firstElement, difference, progressionLength);
  const hiddenElementIndex = genRandomNumber(0, progressionLength - 1);
  const question = genQuestion(progression, hiddenElementIndex);
  const answer = progression[hiddenElementIndex];
  return [question.join(' '), String(answer)];
};

const description = 'What number is missing in the progression?';

const startProgression = () => gameRun(description, genGameData);

export default startProgression;

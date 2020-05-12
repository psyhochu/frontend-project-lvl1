
import gameRun from '../index.js';
import genRandomNumber from '../utils.js';


// Функция для вопроса, возвращает строку из 10 цифр через пробел.
// Например 5 7 9 11 13 .. 17 19 21 23
// Один случайный элемент заменяется на ".."
// На вход подается: questionGenerator(5, 100, 10)
// Первые два значения это диапазон для первого элемента прогрессии,
// третья цифра максимальное значение шага.

const elmentsQuantity = 10;
const progressionGenerator = (startNumber, endNumber, maxStep) => {
  const arr = [];
  arr[0] = genRandomNumber(startNumber, endNumber);
  const step = genRandomNumber(1, maxStep);
  for (let i = 1; i < elmentsQuantity; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  arr[genRandomNumber(0, 9)] = '..';
  return [arr, step];
};

const getAnswer = (progression, step) => {
  if (progression.indexOf('..') === -1) { throw new Error('cant find ".."'); }
  return progression.indexOf('..') === 0 ? progression[1] - step : progression[progression.indexOf('..') - 1] + step;
};

const genGameData = () => {
  const genProgression = progressionGenerator(0, 100, 10);
  const [progression, step] = genProgression;
  const answer = getAnswer(progression, step);
  return [progression.join(' '), String(answer)];
};

const description = 'What number is missing in the progression?';

const startProgression = () => gameRun(description, genGameData);

export default startProgression;


import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// Функция для вопроса, возвращает строку из 10 цифр через пробел.
// Например 5 7 9 11 13 .. 17 19 21 23
// Один случайный элемент заменяется на ".."
// На вход подается: questionGenerator(5, 100, 10)
// Первые два значения это диапазон для первого элемента прогрессии,
// третья цифра максимальное значение шага.

const questionGenerator = (startNumber, endNumber, maxStep) => {
  const arr = [];
  arr[0] = genRandomNumber(startNumber, endNumber);
  const step = genRandomNumber(1, maxStep);
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  arr[genRandomNumber(0, 9)] = '..';
  return arr.join(' ');
};

const sayAnswer = (string) => {
  const stringToArr = string.split(' ');
  const firstElement = +stringToArr[0];
  const secondElement = +stringToArr[1];
  if (stringToArr[9] === '..') {
    const step = secondElement - firstElement;
    return String(+stringToArr[8] + step);
  }
  if (stringToArr[8] === '..') {
    const step = secondElement - firstElement;
    return String(+stringToArr[7] + step);
  }
  for (let i = 0; i < 10; i += 1) {
    if (stringToArr[i] === '..') {
      const nextElementOfarr = +stringToArr[i + 1];
      const nextAfternext = +stringToArr[i + 2];
      const step = nextAfternext - nextElementOfarr;
      return String(nextElementOfarr - step);
    }
  }
  return console.log('ERROR, CANT FIND ".."');
};

const genGameData = () => {
  const question = questionGenerator(0, 100, 10);
  const answer = sayAnswer(question);
  return [question, answer];
};


const startProgression = () => {
  const description = 'What number is missing in the progression?';
  return gamerun(description, genGameData);
};
export default startProgression;

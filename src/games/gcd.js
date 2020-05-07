import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// greatest common divisor
// Принимает строчку такого формата (A B) где A и B числа
// и возвращает НОД этих чисел
const sayAnswer = (string) => {
  const strinToArr = string.split(' ');
  const [num1, num2] = strinToArr;
  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (y === 0) return String(x);
    return nod(y, x % y);
  };
  return nod(Math.abs(+num1), Math.abs(+num2));
};

const genGameData = () => {
  const question = `${genRandomNumber(-100, 100)} ${genRandomNumber(-100, 100)}`;
  const answer = sayAnswer(question);
  return [question, answer];
};

const startGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  return gamerun(description, genGameData);
};
export default startGcd;

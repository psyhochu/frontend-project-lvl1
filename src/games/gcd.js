import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// greatest common divisor
// Принимает (A, B) где A и B числа
// и возвращает НОД этих чисел

const getGcd = (x, y) => {
  if (y === 0) return Math.abs(x);
  return getGcd(y, x % y);
};


const genGameData = () => {
  const num1 = genRandomNumber(-100, 100);
  const num2 = genRandomNumber(-100, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [question, String(answer)];
};
const description = 'Find the greatest common divisor of given numbers.';

const startGcd = () => gamerun(description, genGameData);

export default startGcd;

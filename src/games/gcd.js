import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// greatest common divisor
// Принимает (A, B) где A и B числа
// и возвращает НОД этих чисел

const getGcd = (x, y) => {
  const num1 = Math.abs(x);
  const num2 = Math.abs(y);
  if (num2 > num1) return getGcd(num2, num1);
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};


const genGameData = () => {
  const num1 = genRandomNumber(-100, 100);
  const num2 = genRandomNumber(-100, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [String(question), String(answer)];
};
const description = 'Find the greatest common divisor of given numbers.';

const startGcd = () => gamerun(description, genGameData);

export default startGcd;

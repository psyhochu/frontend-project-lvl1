import gamerun from '../index.js';
import randomNumber from '../utils.js';


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

const taskAndAnswer = () => {
  const task = `${randomNumber(-100, 100)} ${randomNumber(-100, 100)}`;
  const answer = sayAnswer(task);
  return [task, answer];
};

const startGcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  return gamerun(question, taskAndAnswer);
};
export default startGcd;

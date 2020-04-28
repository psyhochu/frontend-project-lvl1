import engine from '../index.js';
import randomNumber from '../utils.js';


// greatest common divisor
// Принимает строчку такого формата (A B) где A и B числа
// и возвращает НОД этих чисел


const gcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const arrOfQuestions = [`${randomNumber(0, 100)} ${randomNumber(0, 100)}`,
    `${randomNumber(-100, 100)} ${randomNumber(-100, 100)}`,
    `${randomNumber(-100, 100)} ${randomNumber(-100, 100)}`];

  const funcForEngine = (string) => {
    const strinToArr = string.split(' ');
    const [num1, num2] = strinToArr;
    const nod = (x, y) => {
      if (y > x) return nod(y, x);
      if (y === 0) return String(x);
      return nod(y, x % y);
    };
    return nod(Math.abs(+num1), Math.abs(+num2));
  };

  return engine(funcForEngine, question, arrOfQuestions);
};
export default gcd;

import engine from '../index.js';
import randomNumber, { randomMathSymbol } from '../utils.js';

// CALC
// Принимает строчку такого формата (A х B) где A и B числа а "х"
// это знак умножения, сложения или вычитания  calc('123 + 456')

const calc = () => {
  const question = 'What is the result of the expression?';

  const arrOfQuestions = [`${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`,
    `${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`,
    `${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`];

  const funcForEngine = (string) => {
    const strinToArr = string.split(' ');
    const [num1, operation, num2] = strinToArr;
    if (operation === '+') {
      return String(+num1 + +num2);
    }
    if (operation === '*') {
      return String(+num1 * +num2);
    }
    if (operation === '-') {
      return String(+num1 - +num2);
    }
    return false;
  };
  return engine(funcForEngine, question, arrOfQuestions);
};
export default calc;

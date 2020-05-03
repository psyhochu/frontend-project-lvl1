import gamerun from '../index.js';
import randomNumber from '../utils.js';


// Принимает строчку такого формата (A х B) где A и B числа а "х"
// это знак умножения, сложения или вычитания  calc('123 + 456')

// Функция возвращает +,- или *, рандомно
export const randomMathSymbol = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};

const sayAnswer = (string) => {
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

const taskAndAnswer = () => {
  const task = `${randomNumber(0, 100)} ${randomMathSymbol()} ${randomNumber(0, 100)}`;
  const answer = sayAnswer(task);
  return [task, answer];
};

const startCalc = () => {
  const question = 'What is the result of the expression?';
  return gamerun(question, taskAndAnswer);
};
export default startCalc;

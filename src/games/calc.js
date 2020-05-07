import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// Принимает строчку такого формата (A х B) где A и B числа а "х"
// это знак умножения, сложения или вычитания  calc('123 + 456')

// Функция возвращает +,- или *, рандомно
export const genRandomMathSymbol = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};

const sayAnswer = (string) => {
  const strinToArr = string.split(' ');
  const [num1, operation, num2] = strinToArr;
  switch (operation) {
    case '+':
      return String(+num1 + +num2);
    case '*':
      return String(+num1 * +num2);
    case '-':
      return String(+num1 - +num2);
    default:
      throw new Error('error text');
  }
};

const genGameData = () => {
  const question = `${genRandomNumber(0, 100)} ${genRandomMathSymbol()} ${genRandomNumber(0, 100)}`;
  const answer = sayAnswer(question);
  return [question, answer];
};

const description = 'What is the result of the expression?';

const startCalc = () => gamerun(description, genGameData);

export default startCalc;

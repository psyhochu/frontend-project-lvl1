import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// Принимает строчку такого формата (A х B) где A и B числа а "х"
// это знак умножения, сложения или вычитания  calc('123 + 456')

// Функция возвращает +, - или *, рандомно


const doCalc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '*':
      return (num1 * num2);
    case '-':
      return (num1 - num2);
    default:
      throw new Error('error text');
  }
};

const arrOfOperators = ['+', '-', '*'];

const genGameData = () => {
  const num1 = genRandomNumber(0, 100);
  const operator = arrOfOperators[genRandomNumber(0, 2)];
  const num2 = genRandomNumber(0, 100);
  const question = `${num1} ${operator} ${num2}`;
  const answer = doCalc(num1, operator, num2);
  return [question, String(answer)];
};

const description = 'What is the result of the expression?';

const startCalc = () => gamerun(description, genGameData);

export default startCalc;

import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


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

const operators = ['+', '-', '*'];

const genGameData = () => {
  const num1 = genRandomNumber(0, 100);
  const operator = operators[genRandomNumber(0, operators.length - 1)];
  const num2 = genRandomNumber(0, 100);
  const question = `${num1} ${operator} ${num2}`;
  const answer = doCalc(num1, operator, num2);
  return [question, String(answer)];
};

const description = 'What is the result of the expression?';

const startCalc = () => gamerun(description, genGameData);

export default startCalc;

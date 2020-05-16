import gameRun from '../index.js';
import genRandomNumber from '../utils.js';


// Принимает число, возвращает yes если число четное, no в других случаях
// Список вопросов в виде массива
const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const genGameData = () => {
  const question = genRandomNumber(-100, 100);
  const answer = getAnswer(question);
  return [String(question), answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const startEven = () => gameRun(description, genGameData);

export default startEven;

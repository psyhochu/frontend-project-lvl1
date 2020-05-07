import gamerun from '../index.js';
import genRandomNumber from '../utils.js';


// Принимает число, возвращает yes если число четное, no в других случаях
// Список вопросов в виде массива
const sayAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const genGameData = () => {
  const question = genRandomNumber(-100, 100);
  const answer = sayAnswer(question);
  return [question, answer];
};

const startEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  return gamerun(description, genGameData);
};
export default startEven;

import gamerun from '../index.js';
import randomNumber from '../utils.js';


// Принимает число, возвращает yes если число четное, no в других случаях
// Список вопросов в виде массива
const sayAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const taskAndAnswer = () => {
  const task = randomNumber(-100, 100);
  const answer = sayAnswer(task);
  return [task, answer];
};

const startEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no"';
  return gamerun(question, taskAndAnswer);
};
export default startEven;

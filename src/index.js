import readlineSync from 'readline-sync';


// ENGINE;
export default (question, taskAndAnswerFunc) => {
  // Спрашивает имя и выводит его на экран
  console.log('Welcome to the Brain Games!');
  const NameChoose = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${NameChoose}!`);
  // Задаем основной вопрос
  console.log(question);
  // Выводим задачу, принимаем ответ (три раза в случае правильного ответа):
  for (let i = 0; i < 3; i += 1) {
    const [task, correctAnswer] = taskAndAnswerFunc();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');
    // Проверяем правильность ответа и выводим облажался или нет
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".Let's try again, ${NameChoose}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${NameChoose}!`);
};

import readlineSync from 'readline-sync';


// ENGINE;
export default (description, genGameData) => {
  // Спрашивает имя и выводит его на экран
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  // Задаем основной вопрос
  console.log(description);
  // Выводим задачу, принимаем ответ (три раза в случае правильного ответа):
  const questionsQuantity = 3;
  for (let i = 0; i < questionsQuantity; i += 1) {
    const [question, correctAnswer] = genGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    // Проверяем правильность ответа и выводим облажался или нет
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\
 Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${userName}!`);
};

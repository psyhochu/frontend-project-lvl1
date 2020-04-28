import readlineSync from 'readline-sync';


// ENGINE;
export default (funcForEngine, mainQuestion, arrOfQuestions) => {
  // Спрашивает имя и выводит его на экран
  console.log('Welcome to the Brain Games!');
  const NameChoose = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${NameChoose}!`);
  // Задаем основной вопрос
  console.log(mainQuestion);

  for (let i = 0; i < arrOfQuestions.length; i += 1) {
    // Выводим первую задачу из массива, принимаем ответ
    console.log(`Question: ${arrOfQuestions[i]}`);
    const answer1 = readlineSync.question('Your answer: ');
    // Правильный ответ:
    const answer2 = funcForEngine(arrOfQuestions[i]);
    // Проверяем правильность ответа и выводим облажался или нет
    if (answer1 === answer2) {
      console.log('Correct!');
    } else {
      console.log(`"${answer1}" is wrong answer ;(. Correct answer was "${answer2}".Let's try again, ${NameChoose}`);
      return;
    }
  }
  console.log(`Congratulations ${NameChoose}!`);
};

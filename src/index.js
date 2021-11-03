import readlineSync from 'readline-sync';

const maxGameScore = 3;

export default (question, getRightAnwser) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  for (let i = 0; i < maxGameScore; i += 1) {
    const [exercise, rightAnswer] = getRightAnwser();
    console.log(`Question: ${exercise}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let parsedUserAnswer = parseInt(userAnswer, 10);
    const isWrong = () => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${name}!`);
    if (Number.isNaN(parsedUserAnswer)) parsedUserAnswer = userAnswer;
    if (parsedUserAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      isWrong();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

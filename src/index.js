import readlineSync from 'readline-sync';

const maxGameScore = 3;

export default (question, getRightAnwser) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  for (let i = 0; i < maxGameScore; i += 1) {
    const [questionNubmer, rightAnswer] = getRightAnwser();
    console.log(`Question: ${questionNubmer}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isWrong = () => console.log(`'${userAnswer}'' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${name}!`);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      isWrong();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

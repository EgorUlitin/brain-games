import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRightAnwser = (number) => {
  for (let i = 2; i < number - 1; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const isPrime = (n) => (getRightAnwser(n) ? 'yes' : 'no');

const prepareData = () => {
  const exercise = getRandomNumber(2, 100);
  const rightAnswer = isPrime(exercise);
  return [exercise, rightAnswer];
};

const gamePrime = () => newGame(question, prepareData);

export default gamePrime;

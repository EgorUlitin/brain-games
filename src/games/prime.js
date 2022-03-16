import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  if (number === 0 || number === 1) return false;
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRightAnwser = (n) => (isPrime(n) ? 'yes' : 'no');

const prepareData = () => {
  const exercise = getRandomNumber(0, 100);
  const rightAnswer = getRightAnwser(exercise);
  return [exercise, rightAnswer];
};

const gamePrime = () => newGame(question, prepareData);

export default gamePrime;

import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRightAnwser = () => {
  const maxRandomNumber = 100;
  const exercise = getRandomNumber(maxRandomNumber);
  const rightAnswer = isEven(exercise) ? 'yes' : 'no';
  return [exercise, rightAnswer];
};

const gameEven = () => newGame(question, getRightAnwser);

export default gameEven;

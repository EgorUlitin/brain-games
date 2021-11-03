import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const question = 'What number is missing in the progression?';

const getRightAnwser = () => {
  const lenght = getRandomNumber(5, 10);
  const step = getRandomNumber(2, 5);
  const firstNumber = getRandomNumber(1, 100);
  const result = [firstNumber];
  const hiddenPosition = getRandomNumber(1, lenght);
  for (let i = 0; i < lenght; i += 1) {
    result.push(result[i] + step);
  }
  const rightAnswer = result[hiddenPosition];
  result[hiddenPosition] = '..';
  return [result, rightAnswer];
};

const prepareData = () => {
  const [exercise, rightAnswer] = getRightAnwser();
  return [exercise, rightAnswer];
};

const gameProgression = () => newGame(question, prepareData);

export default gameProgression;

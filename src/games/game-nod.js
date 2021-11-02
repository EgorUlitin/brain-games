import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getRightAnwser = (num1, num2) => {
  let result = 1;
  if (num1 % num2 === 0) {
    result = num2;
  } else if (num2 % num1 === 0) {
    result = num1;
  }
  const greatestNumber = num1 > num2 ? num1 : num2;
  for (let i = greatestNumber - 1; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const prepareData = () => {
  const nubmerOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  const exercise = `${nubmerOne} ${numberTwo}`;
  const rightAnswer = getRightAnwser(nubmerOne, numberTwo);

  return [exercise, rightAnswer];
};

const gameNod = () => newGame(question, prepareData);

export default gameNod;

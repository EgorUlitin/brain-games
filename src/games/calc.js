import getRandomNumber from '../getRandomNumber.js';
import newGame from '../index.js';

const question = 'What is the result of the expression?';

const getRightAnwser = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const prepareData = () => {
  const operations = ['-', '+', '*'];
  const operation = operations[getRandomNumber(0, 2)];
  const nubmerOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const exercise = `${nubmerOne} ${operation} ${numberTwo}`;
  const rightAnswer = getRightAnwser(nubmerOne, numberTwo, operation).toString();

  return [exercise, rightAnswer];
};

const gameCalc = () => newGame(question, prepareData);

export default gameCalc;

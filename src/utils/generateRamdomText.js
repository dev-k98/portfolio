import { keywords } from '../utils/constants';

const getRandomKeyword = () => {
	return keywords[Math.floor(Math.random() * keywords.length)];
};

export const generateRandomText = () => {
  let words = [];
  for (let i = 0; i < 100; i++) {
    words.push(getRandomKeyword());
  }
  return words;
};
import User from '../types/interfaces';

export const getRandomIndex = (arr: User[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return randomIndex;
};

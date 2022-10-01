export const getCorrectDuration = (duration) => {
  let hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  hours = hours ? hours + 'ч.' : ''
  return `${hours} ${minutes}м.`
};

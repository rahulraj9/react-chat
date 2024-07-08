export const truncateMessage = (message, wordLimit) => {
  const words = message.split(' ');
  if (words.length <= wordLimit) {
    return message;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

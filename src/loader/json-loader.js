module.exports = function removeNumbers(source) {
  const value = typeof source === 'string' ? JSON.parse(source) : source;
  return JSON.stringify(value).replace(/[0-9]/g, '');
};

const wrap = (string, charNum) => {
  let newStr = string.split('');
  let result = '';
  for (let i = 0; i < newStr.length; i++) {
    if (i % charNum === 0) {
      result += '\n';
    }
    result += newStr[i];
  }
  return result;
};

module.exports = wrap;

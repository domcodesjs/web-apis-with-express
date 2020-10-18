exports.encrypt = (req, res) => {
  const { text, shift } = req.query;
  const strArr = text.toUpperCase().split('');
  let encrytedStr = '';

  strArr.forEach((char) => {
    if (char.charCodeAt(0) === 32) {
      encrytedStr += ' ';
    }
    encrytedStr += String.fromCharCode(char.charCodeAt(0) + parseInt(shift));
  });

  res.send(encrytedStr);
};

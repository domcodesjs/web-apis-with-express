exports.addNums = (req, res) => {
  const { a, b } = req.query;
  res.send(`The sum of a and b is ${parseInt(a) + parseInt(b)}`);
};

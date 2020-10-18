exports.checkLotto = (req, res) => {
  const { arr } = req.query;
  const lottoNumbers = [];
  let count = 0;

  arr.forEach((strNum, idx) => (arr[idx] = parseInt(strNum)));

  for (let i = 0; i < 6; i++) {
    lottoNumbers.push(getRandomInt());
  }

  arr.forEach((int) => {
    if (lottoNumbers.includes(int)) {
      count += 1;
    }
  });

  if (count < 4) {
    res.json({
      result: 'Sorry, you lose',
      yourNumbers: arr,
      lottoNumbers,
      matched: count
    });
  } else if (count === 4) {
    res.json({
      result: 'Congratulations, you win a free ticket',
      yourNumbers: arr,
      lottoNumbers,
      matched: count
    });
  } else if (count === 5) {
    res.json({
      result: 'Congratulations! You win $100!',
      yourNumbers: arr,
      lottoNumbers,
      matched: count
    });
  } else if (count === 6) {
    res.json({
      result: 'Wow! Unbelievable! You could have won the mega millions!',
      yourNumbers: arr,
      lottoNumbers,
      matched: count
    });
  }
};

function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(20);
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

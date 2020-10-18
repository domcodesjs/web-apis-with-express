const express = require('express');
const router = express.Router();
const { encrypt } = require('../controllers/cipherController');
const { checkLotto } = require('../controllers/lottoController');
const { addNums } = require('../controllers/calculatorController');

router.get('/sum', addNums);
router.get('/cipher', encrypt);
router.get('/lotto', checkLotto);

module.exports = router;

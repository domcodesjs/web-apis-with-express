const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use('/', require('./routes/index'));

app.listen(5000, () => console.log('Express is listening on port 5000'));

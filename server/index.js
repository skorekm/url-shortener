const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.json({
    message: 'cher.ry - shorter urls, more time for harvesting'
  })
});

app.get('/:id', (req, res) => {
  // TODO: redirect to url
});

app.post('/:id', (req, res) => {
  // TODO: create a short url
});

const PORT = process.env.PORT || 8833;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
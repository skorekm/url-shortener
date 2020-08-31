const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const yup = require('yup');
const monk = require('monk');
const { nanoid } = require('nanoid')

const db = monk('mongodb://mongo:27017/links');
db.then(() => {
  console.log('connected db');
})
const links = db.get('links');
//links.createIndex({slug: 1}, {unique: true});

const app = express();

app.use(helmet());
app.use(morgan('common'));
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

const schema = yup.object().shape({
  url: yup.string().url().required(),
  slug: yup.string()
});

app.post('/url', async (req, res, next) => {
  let { slug, url } = req.body;
  try {
    await schema.validate({
      url,
      slug
    });
    if(!slug) {
      slug = nanoid(5);
    } else {
      const existing = await links.findOne({ slug });
      if(existing) {
        throw new Error('Slug in use');
      }
    }
    slug = slug.toLowerCase();
    const createdUrl = {
      url,
      slug
    };
    const created = await links.insert(createdUrl);
    res.json(created);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  if(error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'You are in production env' : error.stack,
  });
});

const PORT = process.env.PORT || 8833;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
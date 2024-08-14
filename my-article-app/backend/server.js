const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Article Manager API' });
});

app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.post('/articles/add', async (req, res) => {
  try {
    const { url } = req.body;
    console.log('Received URL:', url);
    const response = await axios.get(url);
    const title = response.data.match(/<title>(.*?)<\/title>/i)?.[1] || 'Untitled';
    const content = response.data.match(/<body>(.*?)<\/body>/is)?.[1] || '';
    
    const newArticle = await Article.create({ title, url, content });
    res.json({ message: 'Article added!', article: newArticle });
  } catch (err) {
    console.error('Error adding article:', err);
    res.status(500).json({ error: 'Failed to add article', details: err.message });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

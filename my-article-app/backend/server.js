const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set up Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

// Define Article model
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
    allowNull: false
  },
  labels: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('labels').split(';')
    },
    set(val) {
      this.setDataValue('labels', val.join(';'));
    },
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// Routes
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.post('/articles/add', async (req, res) => {
  try {
    const { title, url, content, userId } = req.body;
    const newArticle = await Article.create({ title, url, content, userId, labels: [] });
    res.json('Article added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

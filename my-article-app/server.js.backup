const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const path = require('path');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

sequelize.authenticate()
  .then(() => console.log('Database connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

const User = require('./models/user')(sequelize, Sequelize.DataTypes);
const Article = require('./models/article')(sequelize, Sequelize.DataTypes);

sequelize.sync({ alter: true })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: 'Error registering new user', details: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    const user = await User.findOne({ where: { username } });
    
    if (!user || !(await user.isValidPassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    if (user.deviceId !== deviceId) {
      return res.status(401).json({ error: 'Invalid device' });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /login route:", error);
    res.status(500).json({ error: 'Error logging in', details: error.message });
  }
});

app.get('/articles', authenticateJWT, async (req, res) => {
  try {
    const articles = await Article.findAll({ where: { userId: req.user.id } });
    res.json(articles);
  } catch (err) {
    console.error("Error in /articles route:", err);
    res.status(500).json({ error: 'Failed to fetch articles', details: err.message });
  }
});

app.post('/articles/add', authenticateJWT, async (req, res) => {
  try {
    const { url, title, content } = req.body;
    const newArticle = await Article.create({ url, title, content, userId: req.user.id });
    res.json({ message: 'Article added!', article: newArticle });
  } catch (err) {
    console.error("Error in /articles/add route:", err);
    res.status(500).json({ error: 'Failed to add article', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

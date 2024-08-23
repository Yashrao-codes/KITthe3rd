var express = require('express');
var cors = require('cors');
var { Sequelize } = require('sequelize');
var path = require('path');
var jwt = require('jsonwebtoken');
var { JWT_SECRET, JWT_EXPIRATION } = require('./config');

var app = express();
var port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

// Models
var User = require('./models/user')(sequelize, Sequelize.DataTypes);
var Article = require('./models/article')(sequelize, Sequelize.DataTypes);

// Sync database
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({ alter: true })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// Middleware to verify JWT
var authenticateJWT = (req, res, next) => {
  var authHeader = req.headers.authorization;

  if (authHeader) {
    var token = authHeader.split(' ')[1];

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

// Routes
app.post('/register', async (req, res) => {
  try {
    var { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    var user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    var token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: 'Error registering new user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    var { username, password, deviceId } = req.body;
    var user = await User.findOne({ where: { username } });

    if (!user || !(await user.isValidPassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    if (user.deviceId !== deviceId) {
      return res.status(401).json({ error: 'Invalid device' });
    }

    var token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.get('/articles', authenticateJWT, async (req, res) => {
  try {
    var articles = await Article.findAll({ where: { userId: req.user.id } });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.post('/articles/add', authenticateJWT, async (req, res) => {
  try {
    var { url, title, content } = req.body;
    var newArticle = await Article.create({ url, title, content, userId: req.user.id });
    res.json({ message: 'Article added!', article: newArticle });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add article', details: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
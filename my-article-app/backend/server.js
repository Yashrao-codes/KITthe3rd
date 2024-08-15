const express = require('express');
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const cors = require('cors');
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const { Sequelize } = require('sequelize');
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const path = require('path');
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const jwt = require('jsonwebtoken');
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const { JWT_SECRET, JWT_EXPIRATION } = require('./config');
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const app = express();
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const port = process.env.PORT || 5000;
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.use(cors());
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.use(express.json());
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const sequelize = new Sequelize({
sequelize.authenticate()
  .then(() => console.log(Database
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  dialect: 'sqlite',
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  storage: path.join(__dirname, 'database.sqlite')
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
});
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const User = require('./models/user')(sequelize, Sequelize.DataTypes);
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const Article = require('./models/article')(sequelize, Sequelize.DataTypes);
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
sequelize.sync({ alter: true })
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  .then(() => console.log('Database synced'))
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  .catch(err => console.error('Error syncing database:', err));
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
// Middleware to verify JWT
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
const authenticateJWT = (req, res, next) => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  const authHeader = req.headers.authorization;
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  if (authHeader) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const token = authHeader.split(' ')[1];
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    jwt.verify(token, JWT_SECRET, (err, user) => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
      if (err) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
        return res.sendStatus(403);
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
      }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
      req.user = user;
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
      next();
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  } else {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.sendStatus(401);
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
};
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.post('/register', async (req, res) => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  try {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const { username, password, deviceId } = req.body;
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const user = await User.create({ username, password, deviceId });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.json({ token });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  } catch (error) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.status(500).json({ error: 'Error registering new user' });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
});
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.post('/login', async (req, res) => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  try {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const { username, password, deviceId } = req.body;
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const user = await User.findOne({ where: { username } });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    if (!user || !(await user.isValidPassword(password))) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
      return res.status(401).json({ error: 'Invalid username or password' });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    if (user.deviceId !== deviceId) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
      return res.status(401).json({ error: 'Invalid device' });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.json({ token });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  } catch (error) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.status(500).json({ error: 'Error logging in' });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
});
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.get('/articles', authenticateJWT, async (req, res) => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  try {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const articles = await Article.findAll({ where: { userId: req.user.id } });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.json(articles);
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  } catch (err) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.status(500).json({ error: 'Failed to fetch articles' });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
});
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.post('/articles/add', authenticateJWT, async (req, res) => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  try {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const { url, title, content } = req.body;
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    const newArticle = await Article.create({ url, title, content, userId: req.user.id });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.json({ message: 'Article added!', article: newArticle });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  } catch (err) {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
    res.status(500).json({ error: 'Failed to add article', details: err.message });
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  }
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
});
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
app.listen(port, () => {
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
  console.log(`Server is running on port: ${port}`);
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error
});
pp.post('/register', async (req, res) => {
  try {
    const { username, password, deviceId } = req.body;
    console.log("Attempting to create user:", { username, deviceId });
    const user = await User.create({ username, password, deviceId });
    console.log("User created:", user);
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.json({ token });
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: Error

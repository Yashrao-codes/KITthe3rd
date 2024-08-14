const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String, required: true },
  labels: { type: [String], default: [] },
  userId: { type: String, required: true }
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

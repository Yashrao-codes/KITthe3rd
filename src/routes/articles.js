const express = require('express');
const router = express.Router();
const crawler = require('../services/crawler');
const Article = require('../models/article');

router.post('/save', async (req, res) => {
  const { url } = req.body;

  try {
    const article = await crawler.fetchArticleContent(url);
    Article.saveArticle(article);

    res.json({ message: 'Article saved successfully!', article });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save article' });
  }
});

router.get('/all', (req, res) => {
  const articles = Article.getAllArticles();
  res.json({ articles });
});

module.exports = router;

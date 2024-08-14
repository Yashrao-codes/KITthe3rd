const express = require('express');
const router = express.Router();
const crawler = require('../services/crawler');
const Article = require('../models/article');
const aiLabeling = require('../services/aiLabeling');
const recommendations = require('../services/recommendations');

router.post('/save', async (req, res) => {
  const { url } = req.body;

  try {
    const article = await crawler.fetchArticleContent(url);
    const labels = aiLabeling.labelArticle(article.content);

    const savedArticle = {
      ...article,
      labels,
      savedAt: new Date(),
    };

    Article.saveArticle(savedArticle);

    res.json({ message: 'Article saved successfully!', article: savedArticle });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save article' });
  }
});

router.get('/all', (req, res) => {
  const articles = Article.getAllArticles();
  res.json({ articles });
});

router.get('/recommend', (req, res) => {
  const limit = parseInt(req.query.limit) || 5; // Default to 5 articles
  const recommendedArticles = recommendations.recommendArticles(limit);
  res.json({ recommendedArticles });
});

module.exports = router;

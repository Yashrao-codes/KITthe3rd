const Article = require('../models/article');

const recommendArticles = (limit) => {
  const articles = Article.getAllArticles();
  
  // Recommend articles based on freshness and uniqueness of labels
  const uniqueArticles = [];
  const seenLabels = new Set();

  for (const article of articles) {
    if (uniqueArticles.length >= limit) break;

    const hasSeenLabel = article.labels.some(label => seenLabels.has(label));

    if (!hasSeenLabel) {
      uniqueArticles.push(article);
      article.labels.forEach(label => seenLabels.add(label));
    }
  }

  return uniqueArticles;
};

module.exports = {
  recommendArticles,
};

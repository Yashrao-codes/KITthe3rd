const articles = [];

module.exports = {
  saveArticle: (article) => {
    articles.push(article);
  },
  getAllArticles: () => {
    return articles;
  }
};

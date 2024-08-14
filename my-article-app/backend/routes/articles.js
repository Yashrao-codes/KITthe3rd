const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const url = req.body.url;
  const content = req.body.content;
  const userId = req.body.userId;

  const newArticle = new Article({
    title,
    url,
    content,
    userId
  });

  newArticle.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Highlight = require('../models/highlight');
const highlightService = require('../services/highlightService');

router.post('/save', (req, res) => {
  const { text } = req.body;

  try {
    Highlight.saveHighlight(text);
    res.json({ message: 'Highlight saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save highlight' });
  }
});

router.get('/nuggets', (req, res) => {
  const highlights = Highlight.getAllHighlights();
  const nuggets = highlightService.processHighlights(highlights);

  res.json({ nuggets });
});

module.exports = router;

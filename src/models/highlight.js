const highlights = [];

module.exports = {
  saveHighlight: (highlight) => {
    highlights.push(highlight);
  },
  getAllHighlights: () => {
    return highlights;
  }
};

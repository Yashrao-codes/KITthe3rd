const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

const labelArticle = (content) => {
  const tokens = tokenizer.tokenize(content.toLowerCase());
  const labels = [];

  // Simple keyword-based labeling (extend with your logic)
  if (tokens.includes('blockchain')) labels.push('Blockchain');
  if (tokens.includes('ai') || tokens.includes('artificial intelligence')) labels.push('AI');
  if (tokens.includes('finance')) labels.push('Finance');

  return labels.length ? labels : ['General'];
};

module.exports = {
  labelArticle,
};

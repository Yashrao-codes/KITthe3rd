const natural = require('natural');
const tokenizer = new natural.SentenceTokenizer();

module.exports = {
  processHighlights: (highlights) => {
    const sentences = highlights.flatMap(highlight => tokenizer.tokenize(highlight));
    const nuggets = [];

    sentences.forEach(sentence => {
      if (sentence.length <= 280) {
        nuggets.push(sentence);
      } else {
        // If the sentence is too long, split it or summarize it further
        const words = sentence.split(' ');
        let nugget = '';

        words.forEach(word => {
          if ((nugget + ' ' + word).length <= 280) {
            nugget += ' ' + word;
          } else {
            nuggets.push(nugget.trim());
            nugget = word;
          }
        });

        if (nugget) {
          nuggets.push(nugget.trim());
        }
      }
    });

    return nuggets;
  }
};

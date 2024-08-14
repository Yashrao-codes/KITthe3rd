const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  fetchArticleContent: async (url) => {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      
      const title = .text();
      const content = .text();

      return { title, content };
    } catch (error) {
      console.error('Error fetching article:', error);
      throw new Error('Unable to fetch article');
    }
  }
};

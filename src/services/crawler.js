const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  fetchArticleContent: async (url) => {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      // Example selectors - adjust these as needed based on the structure of the webpage
      const title = $('title').text(); // Assuming the title is in the <title> tag
      const content = $('article').text(); // Assuming the content is within an <article> tag

      return { title, content };
    } catch (error) {
      console.error('Error fetching article:', error);
      throw new Error('Unable to fetch article');
    }
  }
};

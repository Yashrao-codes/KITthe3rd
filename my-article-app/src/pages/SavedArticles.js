import React, { useState, useEffect } from 'react';
import { Typography, Container, List, ListItem, ListItemText, Box } from '@mui/material';

const SavedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:5000/articles');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        console.error('Failed to fetch articles');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Saved Articles
        </Typography>
        <List>
          {articles.map((article) => (
            <ListItem key={article.id} button component="a" href={article.url} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={article.title} secondary={article.url} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default SavedArticles;

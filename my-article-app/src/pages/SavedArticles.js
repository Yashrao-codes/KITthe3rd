import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@material-ui/core';

const SavedArticles = () => {
  // This would typically come from your backend
  const articles = [
    { id: 1, title: 'Example Article 1', url: 'https://example.com/1' },
    { id: 2, title: 'Example Article 2', url: 'https://example.com/2' },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Saved Articles
      </Typography>
      <List>
        {articles.map((article) => (
          <ListItem key={article.id} button component="a" href={article.url} target="_blank">
            <ListItemText primary={article.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SavedArticles;

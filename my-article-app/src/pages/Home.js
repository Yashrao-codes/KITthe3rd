import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';

const Home = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the URL to your backend
    console.log('Submitted URL:', url);
    setUrl('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Save a New Article
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Article URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Save Article
        </Button>
      </form>
    </Container>
  );
};

export default Home;

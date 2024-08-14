import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar } from '@mui/material';

const Home = () => {
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [backendUrl, setBackendUrl] = useState('');

  useEffect(() => {
    // This will get the current hostname and use it to construct the backend URL
    const hostname = window.location.hostname;
    const backendPort = 5000;
    const calculatedBackendUrl = `https://${hostname.replace('3000', `${backendPort}`)}`;
    console.log('Calculated backend URL:', calculatedBackendUrl);
    setBackendUrl(calculatedBackendUrl);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting URL:', url);
    console.log('Backend URL:', backendUrl);
    try {
      const response = await fetch(`${backendUrl}/articles/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      if (response.ok) {
        setMessage('Article saved successfully!');
        setUrl('');
      } else {
        setMessage(`Failed to save article: ${data.error}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setMessage(`Unable to fetch: ${error.message}`);
    }
    setOpen(true);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
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
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Save Article
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={message}
        />
      </Box>
    </Container>
  );
};

export default Home;

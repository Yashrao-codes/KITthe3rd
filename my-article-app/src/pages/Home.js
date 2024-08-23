import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const response = await fetch('https://fe79aa71-4539-4561-9710-ec20727e5f09-00-33krufq9lvytv.sisko.replit.dev/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Article saved successfully!');
        setUrl('');
      } else {
        setMessage(`Failed to save article: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage(`An error occurred: ${error.message}`);
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

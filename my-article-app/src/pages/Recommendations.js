import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Recommendations = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Recommendations
        </Typography>
        <Typography variant="body1">
          AI-powered recommendations will appear here once implemented.
        </Typography>
      </Box>
    </Container>
  );
};

export default Recommendations;

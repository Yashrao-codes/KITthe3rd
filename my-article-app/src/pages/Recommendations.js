import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Recommendations = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Recommendations
      </Typography>
      <Typography variant="body1">
        AI-powered recommendations will appear here once implemented.
      </Typography>
    </Container>
  );
};

export default Recommendations;

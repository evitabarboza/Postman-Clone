import React from 'react';
import { Box, Typography } from '@mui/material';
import errorImg from '../assets/2.png'; // 👈 Correct import path

const ErrorScreen = () => {
  return (
    <Box>
      <Typography mt={2} mb={2}>Response</Typography>
      <Box display="flex" justifyContent="center">
        <img
          src={errorImg}
          alt="error"
          style={{
            width: '60%',
            height: 'auto',
            objectPosition: 'center 0%',
          }}
        />
      </Box>
    </Box>
  );
};

export default ErrorScreen;

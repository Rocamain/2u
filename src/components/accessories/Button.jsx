import React from 'react';
import { Button } from '@mui/material';

export default function StyledButton({ content }) {
  return (
    <>
      <Button
        size="small"
        variant="contained"
        sx={{ fontWeight: 'semi-bold', letterSpacing: '0.15rem' }}
        disableRipple
      >
        {content}
      </Button>
    </>
  );
}

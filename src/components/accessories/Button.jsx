import React from 'react';
import { Button } from '@mui/material';

export default function StyledButton({ activeCard }) {
  return (
    <>
      <Button
        size="small"
        variant="contained"
        sx={{ fontWeight: 'bold' }}
        disableRipple
      >
        {activeCard.button}
      </Button>
    </>
  );
}

import React from 'react';
import { Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function StyledButton({ content }) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));
  const handleClick = (event) => {
    console.log('clicked');
  };
  const sizes = () => {
    if (desktop) return 'medium';
    if (tablet) return 'medium';
    if (mobile) return 'small';
  };

  return (
    <>
      <Button
        size={sizes()}
        variant="contained"
        onClick={handleClick}
        // fullWidth
      >
        <Typography
          component="p"
          sx={{ fontWeight: 600, fontSize: '0.9rem', wordBreak: 'keep-all' }}
        >
          {content}
        </Typography>
      </Button>
    </>
  );
}

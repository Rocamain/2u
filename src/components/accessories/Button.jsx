import React from 'react';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function StyledButton({ content }) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));

  const sizes = () => {
    if (desktop) return 'large';
    if (tablet) return 'medium';
    if (mobile) return 'small';
  };

  return (
    <>
      <Button
        size={sizes()}
        variant="contained"
        sx={{ fontWeight: 600, letterSpacing: '0.15rem' }}
      >
        {content}
      </Button>
    </>
  );
}

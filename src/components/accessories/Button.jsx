import React from 'react';
import { Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function StyledButton(props) {
  const { content, style } = props;
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));
  const handleClick = () => {
    console.log('clicked');
  };
  const sizes = () => {
    if (desktop) return 'medium';
    if (tablet) return 'medium';
    if (mobile) return 'small';
  };

  return (
    <Button size={sizes()} variant="contained" onClick={handleClick}>
      <Typography
        component="p"
        sx={{
          fontWeight: 600,
          fontSize: '0.9rem',
          wordBreak: 'keep-all',
          ...style,
        }}
      >
        {content}
      </Typography>
    </Button>
  );
}

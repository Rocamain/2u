import React from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';

const NavBar = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%',
  background: 'secondary',
  height: '5em',
  alignItems: 'center',

  margin: '0 auto',
  marginBottom: '30px',
}));

export default function Header() {
  return (
    <NavBar component="nav">
      <img
        src={require('./logo.png')}
        alt="clickable company logo "
        style={{ width: '110px' }}
      />
      <IconButton aria-label="menu">
        <MenuIcon sx={{ fontSize: '1.6rem' }} />
      </IconButton>
    </NavBar>
  );
}

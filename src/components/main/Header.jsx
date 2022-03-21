import { useState, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Popover,
  CardMedia,
  useMediaQuery,
} from '@mui/material';
import StyledButton from '../single/Button';
import NavList from '../single/NavList';
import logo from '../../assets/static/icons/brand_logo.png';

// styles
const StyledNavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '1em',
  marginLeft: '10px',
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-end',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  width: '85vw',
  height: '14vh',
  margin: '0 auto',
  borderRadius: '0px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.4em 0',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    width: '80vw',
    height: '18vh',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    width: '70vw',
    height: '18vh',
  },
  [theme.breakpoints.up('xl')]: {
    width: '65vw',
    height: '20vh',
  },
}));

const StyledImg = styled(CardMedia)(({ theme }) => ({
  maxWidth: '140px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '200px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    maxWidth: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '300px',
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef(null);

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Box
        ref={ref}
        component="header"
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px',
          position: 'sticky',
          bgcolor: 'white',
          zIndex: 1000,
          top: 0,
        }}
      >
        <StyledHeader component="div">
          <StyledImg component="img" src={logo} alt="clickable company logo" />

          <IconButton
            aria-describedby={id}
            aria-label="menu burger button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpen}
            sx={{
              display: {
                md: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {matchesBigScreens && (
            <StyledNavBar component="nav">
              <NavList />
              <StyledButton
                content="Download Cv"
                style={{ fontSize: '1rem' }}
              />
            </StyledNavBar>
          )}
        </StyledHeader>
      </Box>
      {!matchesBigScreens && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <NavList onClose={handleClose} />
        </Popover>
      )}
    </>
  );
}

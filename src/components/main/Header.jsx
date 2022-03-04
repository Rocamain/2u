import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Popover, CardMedia } from '@mui/material';
import StyledButton from '../accessories/Button';

import Menu from '../main/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assets/static/icons/brand_logo .png';

// styles
const StyledNavBar = styled(Box)(({ theme }) => ({
  minWidth: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '1em',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  borderRadius: '0px',
  display: 'flex',
  alignItems: 'center',
  width: '75vw',
  gap: '1em',
  padding: '1em 0',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
    width: '85vw',
  },
}));
const StyledImg = styled(CardMedia)(({ theme }) => ({}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const ref = useRef(null);

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });
  // useEffect(() => {
  //   if (!matchesBigScreens && ref) {

  //   }
  // }, [matchesBigScreens, ref]);

  const handleOpen = (event) => {
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
        sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px' }}
      >
        <StyledHeader component="div">
          <StyledImg
            component="img"
            src={logo}
            alt="clickable company logo"
            sx={{
              width: {
                xs: '30%',
                sm: '30%',
                md: '45%',
              },
            }}
          />

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
                lg: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {matchesBigScreens && (
            <StyledNavBar component="nav">
              <Menu

              // handleClose={handleClose}
              // id="basic-menu"
              // open={isOpen}
              // onClose={handleClose}
              />
              <StyledButton
                content="Download Cv"
                style={{ fontSize: '1.6rem' }}
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
          <Menu />
        </Popover>
      )}
    </>
  );
}

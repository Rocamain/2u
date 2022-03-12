import { forwardRef } from 'react';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const NavLink = forwardRef((props, ref) => {
  const {
    route = 'Home',
    to,
    selected,
    handleListItemClick,
    subpath,
    main,
    matchesBigScreens,
    handleClick,
    handleClose,
    open,
    component,
  } = props;

  const handleClicks = (route) => {
    if (matchesBigScreens && (main || subpath)) {
      handleClose();
    }
    handleListItemClick(route);
  };

  return (
    <ListItemButton
      ref={ref}
      dense
      component={component || 'li'}
      selected={selected}
      variant="contained"
      onClick={() => handleClicks(route)}
      onMouseEnter={handleClick}
      onMouseLeave={handleClose}
      disableRipple
      sx={{
        px: subpath && !matchesBigScreens ? '50px' : '10px',
        width: !matchesBigScreens ? '90%' : undefined,
        mx: !matchesBigScreens ? 'auto' : '0',
        flexGrow: 0,
        zIndex: 1200,
        backgroundColor: main && !matchesBigScreens ? '#00000008' : undefined,
        '&.Mui-selected': {
          backgroundColor: 'white',
        },

        '&:hover': {
          color: '#75C9CC',
          backgroundColor: 'white',
        },
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          display: 'inline-flex',
          minWidth: '100%',
          alignItems: 'flex-start',
        }}
        to={to === 'Home' ? '/' : to}
      >
        <ListItemText
          primary={<Typography variant="navbarLinks">{route}</Typography>}
        />
        {matchesBigScreens &&
          main &&
          (open ? (
            <ExpandLess sx={{ fontSize: '1.7rem' }} />
          ) : (
            <ExpandMore id={route} sx={{ fontSize: '1.7rem' }} />
          ))}
      </Link>
      {props.children}
    </ListItemButton>
  );
});

export default NavLink;

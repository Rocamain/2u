import { useState } from 'react';
import {
  ListItemButton,
  ListItemText,
  Typography,
  Popover,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

function NavLink(props) {
  const {
    route,
    to,
    selected,
    handleListItemClick,
    index,
    subpath,
    main,
    matchesBigScreens,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <ListItemButton
        dense
        component="li"
        selected={selected}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        disableRipple
        sx={{
          px: subpath ? '40px' : '25px',
          width: !matchesBigScreens ? '90%' : undefined,
          flexGrow: 0,
          backgroundColor: main ? '#00000008' : undefined,
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
            primary={
              <Typography sx={{ wordBreak: 'keep-all' }} variant="navbarLinks">
                {route}
              </Typography>
            }
          />
          {matchesBigScreens &&
            main &&
            (open ? <ExpandLess /> : <ExpandMore />)}
        </Link>

        {main && open && (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            {props.children}
          </Popover>
        )}
      </ListItemButton>
    </>
  );
}

export default NavLink;

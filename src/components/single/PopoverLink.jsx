import { useState, useRef } from 'react';
import NavLink from './NavLink';
import { Popper, Box } from '@mui/material';

const PopoverLink = (props) => {
  const {
    selectedIndex,
    allPaths,
    to,
    mainPath,
    sectionsPaths,
    handleListItemClick,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  const handleClick = () => {
    setAnchorEl(ref.current);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <NavLink
      ref={ref}
      component="ul"
      aria-describedby={id}
      open={selectedIndex === mainPath}
      to={to}
      selected={selectedIndex === mainPath}
      route={mainPath}
      subpath={false}
      main={true}
      handleListItemClick={handleListItemClick}
      handleClose={handleClose}
      handleClick={handleClick}
      matchesBigScreens
    >
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        disablePortal={true}
        onMouseLeave={handleClose}
        elevation={5}
        sx={{ style: { backgroundcolor: 'pink' } }}
      >
        <Box sx={{ bgcolor: 'white', mt: 5 }}>
          {sectionsPaths.map((path, index) => {
            return (
              <NavLink
                key={allPaths[path]}
                to={allPaths[path]}
                borderTop={index === 0 ? '3px solid #2ea3f2' : 'none'}
                selected={selectedIndex === path}
                route={path}
                handleListItemClick={handleListItemClick}
                subpath={true}
                main={false}
                matchesBigScreens
              />
            );
          })}
        </Box>
      </Popper>
    </NavLink>
  );
};

export default PopoverLink;

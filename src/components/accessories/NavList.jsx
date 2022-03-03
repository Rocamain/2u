import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Popover } from '@mui/material';

import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

// const singleLink ;
function NavList(props) {
  console.log('nalist', props.path);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return <div>hello </div>;
}

export default NavList;

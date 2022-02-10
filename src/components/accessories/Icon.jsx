import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

export default function Icon(props) {
  const { icon } = props;
  let iconURL = null;
  if (icon) {
    let path = icon.replaceAll(' ', '_');
    iconURL = require(`../../static/images/${path}.png`);
  }
  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: '5em',
    height: '5em',
    margin: '0 auto',
    borderRadius: '0',
    backgroundSize: 'cover',
    backgroundImage: `url(${iconURL})`,
  }));

  return icon && <StyledIconButton sx={{ mt: '30px', mb: '10px' }} />;
}

import { Icon } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useRef } from 'react';
import ScrollAnimation from '../accessories/ScrollAnimation';

const AnimatedIcon = (props) => {
  const { icon } = props;
  let ref = useRef(null);

  let iconURL = null;
  if (icon) {
    let path = icon.replaceAll(' ', '_');
    iconURL = require(`../../assets/static/images/${path}.png`);
  }
  const StyledIcon = styled(Icon)(({ theme }) => ({
    width: '5em',
    height: '5em',
    margin: '0 auto',
    borderRadius: '0',
    backgroundSize: 'cover',
    backgroundImage: `url(${iconURL})`,
    loading: 'lazy',
  }));

  return (
    icon && (
      <ScrollAnimation>
        <StyledIcon key={icon} ref={ref} sx={{ mt: '30px', mb: '10px' }} />
      </ScrollAnimation>
    )
  );
};

export default AnimatedIcon;

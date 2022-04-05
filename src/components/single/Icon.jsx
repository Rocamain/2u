import { Icon } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';

const AnimatedIcon = (props) => {
  const { iconFileName } = props;
  let ref = useRef(null);

  let iconURL = null;
  if (iconFileName) {
    iconURL = require(`../../assets/static/icons/${iconFileName}`);
  }
  const StyledIcon = styled(Icon)(({ theme }) => ({
    width: '100%',
    height: '5em',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${iconURL})`,
    backgroundSize: 'contain',
    margin: '1em auto',
    border: '0px !important',
    outline: '0',
    // loading: 'lazy',
  }));

  return (
    iconFileName && (
      <ScrollAnimation>
        <StyledIcon
          component="div"
          key={iconFileName}
          ref={ref}
          sx={{ border: '0px !important', outline: '0' }}
        />
      </ScrollAnimation>
    )
  );
};

export default AnimatedIcon;

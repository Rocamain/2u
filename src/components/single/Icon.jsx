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
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundImage: `url(${iconURL})`,

    loading: 'lazy',
  }));

  return (
    iconFileName && (
      <ScrollAnimation>
        <StyledIcon
          key={iconFileName}
          ref={ref}
          sx={{ mt: '30px', mb: '10px' }}
        />
      </ScrollAnimation>
    )
  );
};

export default AnimatedIcon;

import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Slide, Fade } from '@mui/material';
import { useEffect, useState, useRef } from 'react';

export default function Icon(props) {
  const { icon } = props;
  const slideRef = useRef(null);

  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    // distance from the top to the top of the element
    let { offsetTop } = slideRef.current;
    //  20% of the viewport
    let thirdViewPort = window.innerHeight * 0.2;
    // trigger point
    let triggerPoint = thirdViewPort + offsetTop;

    // if the scroll point reach the trigger point set the animation
    if (window.scrollY > triggerPoint) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    if (!animate) {
      window.addEventListener('scroll', triggerAnimation);
    }
    console.log('happpens now');
    return () => window.removeEventListener('scroll', triggerAnimation);
  }, [animate]);

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

  return (
    <Fade
      in={animate}
      appear={animate}
      timeout={{ appear: 3000, enter: 3800, exit: 0 }}
    >
      <div>
        <Slide
          direction="down"
          in={animate}
          appear={animate}
          timeout={{ appear: 5000, enter: 800, exit: 0 }}
        >
          <StyledIconButton ref={slideRef} sx={{ mt: '30px', mb: '10px' }} />
        </Slide>
      </div>
    </Fade>
  );
}

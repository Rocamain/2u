import { Slide, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import React from 'react';

const ScrollAnimation = (props) => {
  const [animate, setAnimate] = useState(false);
  const { ref } = props.children;

  const triggerAnimation = (e) => {
    // e.preventDefault();
    // distance from the top to the top of the element
    const element = ref.current;
    let offset = element.offsetTop;
    //  50% of the viewport
    let halfOfTheViewPort = window.innerHeight / 2;

    if (window.scrollY + halfOfTheViewPort > offset) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    if (!animate && ref) {
      window.addEventListener('scroll', triggerAnimation, { passive: true });
    }

    return () =>
      window.removeEventListener('scroll', triggerAnimation, { passive: true });
  }, [animate, ref]);

  // ISSUES IN COMBINATION WITH SLIDE. #1 Slide and Fade Animation not working  together in Icon Component

  return (
    <Fade
      in={animate}
      appear={animate}
      timeout={{ appear: 1000, enter: 800, exit: 0 }}
    >
      {/* <div>
        <Slide
          direction="down"
          in={animate}
          appear={animate}
          timeout={{ appear: 5000, enter: 800, exit: 0 }}
        > */}
      {props.children}
      {/* </Slide>
      </div> */}
    </Fade>
  );
};

export default ScrollAnimation;

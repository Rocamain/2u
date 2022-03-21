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

    // in case there is positon absolute realtive to the parent,
    //we will get hte distance of the parent and added to the offset
    if (element.offsetParent.offsetParent) {
      offset =
        element.offsetParent.offsetParent.offsetTop +
        element.offsetTop -
        element.scrollHeight;
    }

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

  return (
    <Fade
      in={animate}
      appear={animate}
      timeout={{ appear: 3000, enter: 3800, exit: 0 }}
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

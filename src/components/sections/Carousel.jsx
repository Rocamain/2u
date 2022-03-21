import { useState } from 'react';
import useCardStyles from '../../hooks/styles/useCardStyles';
import useFetch from '../../hooks/useFetch';

import { Box, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';
import Card from '../single/Card';
import Stepper from '../single/Stepper';

export default function Carousel({ path }) {
  // Hooks
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);
  // Custom Hook

  let cards = useFetch(`http://localhost:8000/${path}/`);

  if (cards) {
    cards = cards.Carousel;
  }

  // Styles
  const classes = useCardStyles();

  // Slider Handler
  const handleSlider = (event) => {
    const increment = event.target === 'next' ? +1 : -1;
    const newIndex = (slide + increment + cards.length) % cards.length;
    setExit(true);

    setTimeout(() => {
      setSlide(newIndex);
      setExit(false);
    }, 500);
  };

  return (
    cards && (
      <Box alt="sea water on the background" className={classes.carousel}>
        <Box className={classes.slideContainer}>
          <Box className={classes.slideShowWrapper}>
            <Button className={classes.slideButton} onClick={handleSlider}>
              <KeyboardArrowLeft name="back" className={classes.chevron} />
            </Button>
            <Card
              key={1}
              animation={true}
              cardInfo={cards[slide]}
              exit={exit}
              carousel={'true'}
            />
            <Button className={classes.slideButton} onClick={handleSlider}>
              <KeyboardArrowRight name="next" className={classes.chevron} />
            </Button>
          </Box>
          <Stepper steps={cards.length} activeStep={slide} />
        </Box>
      </Box>
    )
  );
}
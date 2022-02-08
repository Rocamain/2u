import { useState } from 'react';

import useDb from '../../hooks/custom/useDb';
import { Box, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

import Card from './Card';
import Stepper from './Stepper';
import useCardStyles from '../../hooks/styles/useCardStyles';

export default function Carousel() {
  // Hooks
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);
  // Custom Hook
  const cards = useDb('http://localhost:8000/carousels');

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
              carousel={true}
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

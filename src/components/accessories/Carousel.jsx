import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';
import Card from './Card';
import Stepper from './Stepper';
import useCardStyles from '../../hooks/styles/useCardStyles';

export default function Carousel() {
  const [cards, setCards] = useState(null);
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);

  const classes = useCardStyles();

  useEffect(() => {
    fetch('http://localhost:8000/carousels')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((cardsInfo) => {
        setCards(cardsInfo);
      });
  }, []);

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
            <Button size="small" onClick={handleSlider}>
              <KeyboardArrowLeft
                name="back"
                className="back"
                fontSize="large"
                sx={{
                  color: 'white',
                }}
              />
            </Button>

            <Card
              key={1}
              animation={true}
              cardInfo={cards[slide]}
              exit={exit}
            />

            <Button size="large" onClick={handleSlider}>
              <KeyboardArrowRight
                className="next"
                name="next"
                fontSize="large"
                sx={{
                  color: 'white',
                }}
              />
            </Button>
          </Box>
          <Stepper steps={cards.length} activeStep={slide} />
        </Box>
      </Box>
    )
  );
}

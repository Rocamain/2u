import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';
import Card from './Card';
import Stepper from './Stepper';
import useCardStyles from '../../hooks/styles/useCardStyles';

export default function Carousel() {
  const [cards, setCards] = useState(null);
  const [slide, setSlide] = useState(1);
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

  const handleNext = () => {
    setSlide((prev) => prev - 1);
  };

  const handleBack = () => {
    setSlide((prev) => prev + 1);
  };

  return (
    cards && (
      <Box alt="sea water on the background" className={classes.carousel}>
        <Box className={classes.slideContainer}>
          <Box className={classes.slideShowWrapper}>
            <Button
              size="small"
              onClick={handleNext}
              // disabled={activeCard === 5}
              sx={{ color: 'white' }}
            >
              <KeyboardArrowLeft
                fontSize="large"
                sx={{
                  color: 'white',
                  position: 'relative',
                  bottom: '50%',
                }}
              />
            </Button>

            {cards.map((card) =>
              card.id === slide ? (
                <Card
                  key={card.id}
                  animation={true}
                  cardInfo={card}
                  exit={false}
                />
              ) : (
                <Card
                  key={card.id}
                  animation={true}
                  cardInfo={card}
                  exit={true}
                />
              )
            )}

            <Button
              size="large"
              onClick={handleBack}
              // disabled={activeCard === 0}
            >
              <KeyboardArrowRight
                fontSize="large"
                sx={{
                  color: 'white',
                }}
              />
            </Button>
          </Box>
          <Stepper steps={cards.length} activeStep={slide - 1} />
        </Box>
      </Box>
    )
  );
}

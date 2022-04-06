import { useState, useRef } from 'react';
import clsx from 'clsx';
import usePhotoAnimation from '../../hooks/styles/usePhotoAnimation';
import useCardStyles from '../../hooks/styles/useCardStyles';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';
import Card from '../single/Card';
import Stepper from '../single/Stepper';
import useBg from '../../hooks/useBg';
import usePictureResize from '../../hooks/usePictureResize';
import { useTheme } from '@mui/material/styles';

export default function Carousel(props) {
  const {
    path,
    cards,
    title,
    subtitle,
    variantTitle,
    variantSubtitle,
    component,
  } = props;

  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Styles
  const theme = useTheme();
  let isBigScreen = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useCardStyles();
  let animationStyles = usePhotoAnimation();

  let animatedPhoto = `${clsx(animationStyles.animatedItem, {
    [animationStyles.animatedItemExiting]: exit,
  })}`;

  let animatedChevronR = `${clsx(classes.chevronR, {
    [classes.onMouseOverChevronR]: isHover,
    [classes.onMouseOutChevronR]: !isHover,
  })}`;

  let animatedChevronL = `${clsx(classes.chevronL, {
    [classes.onMouseOverChevronL]: isHover,
    [classes.onMouseOutChevronL]: !isHover,
  })}`;

  // Ref
  const overlapContainer = useRef(null);
  const card = useRef(null);
  const chevronRefR = useRef(null);
  const chevronRefL = useRef(null);

  // Custom Hooks

  let bgHeight = useBg(cards, overlapContainer, true);
  let photoResize = usePictureResize(card);

  console.log(photoResize);

  // Slider Handler
  const handleSlider = (event) => {
    const increment = event.currentTarget.value === 'next' ? +1 : -1;
    const newIndex = (slide + increment + cards.length) % cards.length;
    setExit(true);

    setTimeout(() => {
      setSlide(newIndex);
      setExit(false);
    }, 500);
  };

  const handleChevron = (event) => {
    event.type === 'mouseover' ? setIsHover(true) : setIsHover(false);
  };

  return (
    <Box className={classes.carousel} component={'section'}>
      {isBigScreen && (
        <Box className={classes.carouselHeader}>
          <Typography component="h1" variant={variantTitle}>
            {title}
          </Typography>
          <Typography component="h4" variant={variantSubtitle}>
            {subtitle}
          </Typography>
        </Box>
      )}

      <Box
        className={classes.slideContainer}
        height={bgHeight}
        onMouseOver={handleChevron}
        onMouseLeave={handleChevron}
      >
        <Box className={classes.slideShowWrapper} ref={overlapContainer}>
          <Button
            value="back"
            className={classes.slideButtonL}
            onClick={handleSlider}
          >
            <KeyboardArrowLeft
              value="back"
              className={animatedChevronL}
              ref={chevronRefR}
            />
          </Button>

          {isBigScreen && (
            <Box
              component="img"
              src={require(`../../assets/static/icons/${cards[slide].iconFileName}`)}
              alt="woman face"
              className={animatedPhoto}
              sx={{
                top: {
                  md: photoResize.axis.top - 50 + 'px',
                  xl: photoResize.axis.top - 150 + 'px',
                },

                left: { md: '13%', xl: '16%' },
                position: 'absolute',

                width: { md: '300px', xl: '420px' },

                maxWidth: { md: '23vw', xl: '20vw' },
              }}
            />
          )}
          <Box ref={card} className={classes.carouselCardContainer}>
            <Card
              component={component}
              animation={true}
              cardInfo={cards[slide]}
              exit={exit}
              bigScreen={isBigScreen}
              carousel={true}
            />
          </Box>

          <Button
            value="next"
            className={classes.slideButtonR}
            onClick={handleSlider}
          >
            <KeyboardArrowRight
              value="next"
              className={animatedChevronR}
              ref={chevronRefL}
            />
          </Button>
        </Box>
      </Box>
      <Stepper steps={cards.length} activeStep={slide} />
    </Box>
  );
}

import { useState } from 'react';
import clsx from 'clsx';
import useSlideAnimation from '../../hooks/styles/useSlideAnimation';
import useCardStyles from '../../hooks/styles/modelACardStyles';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

import StyledIcon from './Icon';
import StyledButton from './Button';
import modelACardStyles from '../../hooks/styles/modelACardStyles';
export default function StyledCard(props) {
  const { cardInfo, exit, carousel, iconFileName, cardStyles, component } =
    props;
  const { variantContent, variantTitle, variantSubtitle } = cardInfo;
  const [isHover, setIsHover] = useState(false);

  // ModelA component Styles

  let modelACardStyle = modelACardStyles();

  let modelACardClasses = `${clsx(modelACardStyle.modelACard, {
    [modelACardStyle.onMouseOverModelACard]: isHover,
    [modelACardStyle.onMouseOutModelACard]: !isHover,
  })}`;

  // Carousel component Styles

  let carouselCardStyle = useSlideAnimation();

  let carouselCardClasses = `${clsx(
    carouselCardStyle.carouselCard,
    carouselCardStyle.carouselCardAnimation,
    {
      [carouselCardStyle.carouselCardAnimationExiting]: exit,
    }
  )}`;

  //

  const handleHover = (event) => {
    event.type === 'mouseover' ? setIsHover(true) : setIsHover(false);
  };

  // class Selector according component
  let selectedClass;
  const style = (component) => {
    switch (component) {
      case 'Carousel':
        selectedClass = carouselCardClasses;
        break;
      case 'ModelA':
        selectedClass = modelACardClasses;
        break;
      default:
        selectedClass = '';
    }
  };

  style(component);

  return (
    cardInfo && (
      <Card
        key={'index'}
        className={selectedClass}
        elevation={0}
        onMouseOver={component === 'ModelA' ? handleHover : null}
        onMouseOut={component === 'ModelA' ? handleHover : null}
        sx={{
          color: carousel ? 'carousel.main' : 'text.primary',
          ...cardStyles,
        }}
      >
        <Box
          sx={{
            width: carousel ? { md: '85%', lg: '80%', xl: '83%' } : '90%',
            pb: '0',
            mx: 'auto',
            ml: carousel && 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {iconFileName && <StyledIcon iconFileName={iconFileName} />}
          {cardInfo.title && (
            <CardHeader
              title={
                <Typography
                  align={carousel ? 'left' : 'center'}
                  variant={variantTitle}
                  component="h3"
                >
                  {cardInfo.title}
                </Typography>
              }
            />
          )}

          <CardContent sx={{ marginBottom: '1em' }}>
            <Typography variant={variantSubtitle} component="h5">
              {cardInfo.subtitle}
            </Typography>
            {cardInfo.content.map((paragraph, index) => (
              <Typography key={index} variant={variantContent} component="p">
                {paragraph}
              </Typography>
            ))}
          </CardContent>
          {carousel && (
            <CardActions>
              <StyledButton content={cardInfo.button} />
            </CardActions>
          )}
        </Box>
      </Card>
    )
  );
}

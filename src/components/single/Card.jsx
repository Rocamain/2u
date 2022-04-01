import clsx from 'clsx';
import useSlideAnimation from '../../hooks/styles/useSlideAnimation';

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

export default function StyledCard(props) {
  const { cardInfo, exit, carousel, iconFileName, cardStyles } = props;
  const { variantContent, variantTitle, variantSubtitle } = cardInfo;

  let animationStyles = useSlideAnimation();

  let animatedCard = `${clsx(
    animationStyles.carouselCard,
    animationStyles.carouselCardAnimation,
    {
      [animationStyles.carouselCardAnimationExiting]: exit,
    }
  )}`;
  return (
    cardInfo && (
      <Card
        key={'index'}
        className={carousel && animatedCard}
        elevation={0}
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

import clsx from 'clsx';
import useSlideAnimation from '../../hooks/styles/useSlideAnimation';

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import StyledIcon from './Icon';
import StyledButton from './Button';

export default function StyledCard(props) {
  const { cardInfo, exit, carousel, iconFileName, cardStyles } = props;
  const { variantContent, variantTitle, variantSubtitle } = cardInfo;

  let animationStyles = useSlideAnimation();

  let animatedCard = `${clsx(animationStyles.animatedItem, {
    [animationStyles.animatedItemExiting]: exit,
  })}`;

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
        {iconFileName && <StyledIcon iconFileName={iconFileName} />}
        {cardInfo.title && (
          <CardHeader
            title={
              <Typography align="center" variant={variantTitle} component="h3">
                {cardInfo.title}
              </Typography>
            }
          />
        )}

        <CardContent sx={{ pb: '0' }}>
          <Typography align="center" variant={variantSubtitle} component="h5">
            {cardInfo.subtitle}
          </Typography>
          {cardInfo.content.map((paragraph, index) => (
            <Typography key={index} variant={variantContent} component="p">
              {paragraph}
            </Typography>
          ))}
        </CardContent>
        {carousel && (
          <CardActions sx={{ py: '1em' }}>
            <StyledButton content={cardInfo.button} />
          </CardActions>
        )}
      </Card>
    )
  );
}

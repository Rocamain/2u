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
  const { cardInfo, exit, carousel, icon, cardStyles } = props;

  let animationStyles = useSlideAnimation();

  let animatedCard = `${clsx(animationStyles.animatedItem, {
    [animationStyles.animatedItemExiting]: exit,
  })}`;

  return (
    cardInfo && (
      <Card
        key={'index'}
        className={carousel && animatedCard}
        elevation={8}
        sx={{
          color: carousel ? 'carousel.main' : 'text.primary',
          ...cardStyles,
        }}
      >
        {icon && <StyledIcon icon={icon} />}
        <CardHeader
          title={
            <Typography
              align="center"
              variant={carousel ? 'title1' : 'title2'}
              component="h3"
            >
              {cardInfo.title}
            </Typography>
          }
        />

        <CardContent sx={{ pb: '0.5em' }}>
          <Typography variant={carousel ? 'body1' : 'body2'}>
            {cardInfo.content}
          </Typography>
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

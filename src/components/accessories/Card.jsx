import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import StyledButton from './Button';
import clsx from 'clsx';

import useCardStyles from '../../hooks/styles/useCardStyles';
import useSlideAnimation from '../../hooks/styles/useSlideAnimation';
export default function StyledCard(props) {
  let classes = useCardStyles();
  let animationStyles = useSlideAnimation();

  const { animation, cardInfo, exit } = props;

  if (animation) {
    classes = `${clsx(animationStyles.animatedItem, {
      [animationStyles.animatedItemExiting]: exit,
    })} ${classes.card}`;
  } else {
    classes = `{${classes.card} ${classes.hidden}`;
  }

  return (
    <Card key={'index'} className={classes} elevation={8}>
      <CardHeader
        title={
          <Typography variant="title" component="h2" align="center">
            {cardInfo.title}
          </Typography>
        }
      />
      <CardContent variant="body1" sx={{ pb: '0.5em' }}>
        <Typography>{cardInfo.content}</Typography>
      </CardContent>

      <CardActions sx={{ py: '1em' }}>
        <StyledButton activeCard={{ button: cardInfo.button }} />
      </CardActions>
    </Card>
  );
}

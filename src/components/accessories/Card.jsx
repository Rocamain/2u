import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import useCardStyles from '../../hooks/styles/useCardStyles';
import useSlideAnimation from '../../hooks/styles/useSlideAnimation';

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';

import StyledButton from './Button';

export default function StyledCard(props) {
  const { cardInfo, exit, carousel, icon, first } = props;
  let iconURL = null;
  if (icon) {
    let path = icon.replaceAll(' ', '_');
    console.log(first, icon);
    iconURL = require(`../../static/images/${path}.png`);
  }

  // Styles
  let { carouselContent, carouselTitle, card, cardFirst } = useCardStyles();
  let animationStyles = useSlideAnimation();
  // animated card styles. thnx clx that allow to check if executes the exit animation of the card
  let animatedCard = `${clsx(animationStyles.animatedItem, {
    [animationStyles.animatedItemExiting]: exit,
  })} ${card}`;

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: '5em',
    height: '5em',
    margin: '0 auto',
    borderRadius: '0',
    backgroundSize: 'cover',
  }));

  return (
    <Card
      key={'index'}
      className={
        (carousel ? animatedCard : card) &&
        (first ? `${cardFirst} ${card}` : card)
      }
      elevation={8}
    >
      <CardHeader
        title={
          <Typography
            {...(carousel
              ? { className: carouselTitle }
              : { variant: 'title' })}
            component="h2"
            align="center"
          >
            {cardInfo.title}
          </Typography>
        }
      />
      {icon && <StyledIconButton sx={{ backgroundImage: `url(${iconURL})` }} />}
      <CardContent sx={{ pb: '0.5em' }}>
        <Typography
          {...(carousel
            ? { className: carouselContent }
            : { variant: 'body1' })}
        >
          {cardInfo.content}
        </Typography>
      </CardContent>

      {carousel && (
        <CardActions sx={{ py: '1em' }}>
          <StyledButton content={cardInfo.button} />
        </CardActions>
      )}
    </Card>
  );
}

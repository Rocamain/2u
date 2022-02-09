import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import useSlideAnimation from '../../hooks/styles/useSlideAnimation';
// import { useTheme } from '@mui/styles';

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
  const { cardInfo, exit, carousel, icon, cardStyles } = props;

  // Styles

  let iconURL = null;
  if (icon) {
    let path = icon.replaceAll(' ', '_');
    iconURL = require(`../../static/images/${path}.png`);
  }

  // animated card styles. thnx clx that allow to check if executes the exit animation of the card
  let animationStyles = useSlideAnimation();

  let animatedCard = `${clsx(animationStyles.animatedItem, {
    [animationStyles.animatedItemExiting]: exit,
  })}`;

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
      className={carousel && animatedCard}
      elevation={8}
      sx={{ color: carousel ? 'carousel.main' : 'text.primary', ...cardStyles }}
    >
      {icon && (
        <StyledIconButton
          sx={{ backgroundImage: `url(${iconURL})`, mt: '30px', mb: '10px' }}
        />
      )}
      <CardHeader
        title={
          <Typography
            align="center"
            variant={carousel ? 'title1' : 'title2'}
            component="h2"
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
  );
}

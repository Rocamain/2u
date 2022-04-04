import { makeStyles } from '@mui/styles';

const modelACardStyles = makeStyles((theme) => ({
  modelACard: {
    transform: 'scale(1)',
  },
  onMouseOverModelACard: {
    animation: `$grow 400ms ${theme.transitions.easing.easeInOut}`,
    animationFillMode: 'both',
  },
  onMouseOutModelACard: {
    animation: `$shrink 400ms ${theme.transitions.easing.easeInOut}`,
    animationFillMode: 'both',
  },

  '@keyframes grow': {
    from: {
      transform: 'scale(1)',
    },

    to: {
      transform: 'scale(1.07)',
    },
  },
  '@keyframes shrink': {
    from: {
      transform: 'scale(1.07)',
    },

    to: {
      transform: 'scale(1)',
    },
  },
}));

export default modelACardStyles;

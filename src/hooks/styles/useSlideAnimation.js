import { makeStyles } from '@mui/styles';

const useSlideAnimation = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0.5,
    display: 'none',
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateY(25%)',
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

export default useSlideAnimation;

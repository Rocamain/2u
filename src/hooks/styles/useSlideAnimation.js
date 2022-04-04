import { makeStyles } from '@mui/styles';

const useSlideAnimation = makeStyles((theme) => ({
  carouselCard: {
    [theme.breakpoints.down('sm')]: {
      padding: '2em 0.9em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '4em 1.8em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '66%%',
      padding: '5em 3em',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '66%%',
      padding: '6.5em 5em',
    },
    [theme.breakpoints.up('xl')]: {
      width: '64%%',
      padding: '7.5em 5em',
    },
  },
  carouselCardAnimation: {
    animation: `$myEffect 1400ms ${theme.transitions.easing.easeInOut}`,
  },
  carouselCardAnimationExiting: {
    animation: `$myEffectExit 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateY(15%)',
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

import { makeStyles } from '@mui/styles';

const usePhotoAnimation = makeStyles((theme) => ({
  animatedItem: {
    boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',
    zIndex: 200,
    position: 'absolute',
    animation: `$myEffect 1200ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.between('md', 'lg')]: {
      top: '32%',
      left: '10%',
      width: '300px',
      maxWidth: '27vw',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      top: '32%',
      left: '13%',
      width: '400px',
      maxWidth: '23vw',
    },
    [theme.breakpoints.up('xl')]: {
      top: '22%',
      left: '15%',
      width: '450px',
      maxWidth: '21vw',
    },
  },
  animatedItemExiting: {
    animation: `$myEffectExit 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-25%)',
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

export default usePhotoAnimation;

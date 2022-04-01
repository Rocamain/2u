import { makeStyles } from '@mui/styles';

const usePhotoAnimation = makeStyles((theme) => ({
  animatedItem: {
    maxWidth: '20vw',
    height: 'auto',
    position: 'absolute',
    boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',
    left: '20%',
    top: '25%',
    zIndex: 200,
    animation: `$myEffect 1200ms ${theme.transitions.easing.easeInOut}`,

    [theme.breakpoints.between('lg', 'xl')]: {
      maxWidth: '20vw',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '20vw',
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

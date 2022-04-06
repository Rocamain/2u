import { makeStyles } from '@mui/styles';
import image from '../../assets/static/backgrounds/water.jpg';
import backgroundImage from '../../assets/static/backgrounds/bg.jpg';
import backgroundImage2 from '../../assets/static/backgrounds/bg2.jpg';
import curves from '../../assets/static/backgrounds/curves.svg';

export const useStyles = makeStyles((theme) => {
  return {
    carousel: {
      paddingTop: '9em',
      paddingBottom: '10em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      [theme.breakpoints.up('md')]: {
        paddingTop: '2em',
      },
    },
    carouselHeader: {
      marginLeft: 'auto',
      position: 'relative',
      zIndex: 100,
      marginTop: '1em',
      top: 0,
      [theme.breakpoints.between('md', 'lg')]: {
        width: '55.4%',
        top: '3em',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '53%',
        top: '3.3em',
      },
      [theme.breakpoints.up('xl')]: {
        width: '53%',
        top: '4em',
      },
    },

    slideContainer: {
      width: '100%',
      margin: '0 auto',
      backgroundImage: theme.palette.background.primary,
      '&:hover:': {
        backgroundImage: 'pink',
      },
    },
    slideShowWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      marginTop: '-1.5em',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
      },
    },
    carouselCardContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '60vw',

      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-end',
        width: '80%',
      },
    },

    slideButtonR: {
      minWidth: '2.7em',
      width: '6.5vw',
      overflow: 'hidden',
      [theme.breakpoints.up('md')]: {
        minWidth: '10vw',
        justifyContent: 'flex-end',
      },
      '&:hover ': {
        background: 'transparent',
      },
    },
    slideButtonL: {
      minWidth: '2.7em',
      width: '6.5vw',
      [theme.breakpoints.up('md')]: {
        minWidth: '35vw',
        justifyContent: 'flex-start',
      },
      '&:hover ': {
        background: 'transparent',
      },
    },

    chevronR: {
      color: 'white',
      fontSize: '3.4rem',
      transform: 'translateX(15em)',
    },

    onMouseOverChevronR: {
      animation: `$moveToLeft 1000ms ${theme.transitions.easing.easeInOut}`,
      animationFillMode: 'both',
    },
    onMouseOutChevronR: {
      color: 'white',
      fontSize: '3.4rem',
      animation: `$moveBackToRight 1000ms ${theme.transitions.easing.easeInOut}`,
      animationFillMode: 'both',
    },

    '@keyframes moveToLeft': {
      from: {
        transform: 'translateX(15em)',
      },

      to: {
        transform: 'translateX(0)',
      },
    },

    '@keyframes moveBackToRight': {
      from: {
        transform: 'translateX(0)',
      },

      to: {
        transform: 'translateX(15em)',
      },
    },

    chevronL: {
      color: 'white',
      fontSize: '3.4rem',
      transform: 'translateX(-15em)',
    },
    onMouseOverChevronL: {
      animation: `$moveToRight 1000ms ${theme.transitions.easing.easeInOut}`,
      animationFillMode: 'both',
    },
    onMouseOutChevronL: {
      color: 'white',
      fontSize: '3.4rem',
      animation: `$moveBackToLeft 1000ms ${theme.transitions.easing.easeInOut}`,
      animationFillMode: 'both',
    },

    '@keyframes moveToRight': {
      from: {
        transform: 'translateX(-15em)',
      },

      to: {
        transform: 'translateX(0)',
      },
    },

    '@keyframes moveBackToLeft': {
      from: {
        transform: 'translateX(0)',
      },

      to: {
        transform: 'translateX(-15em)',
      },
    },
    heroHeader: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100,
      width: '80%',
      margin: '0 auto',

      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        paddingTop: '16em',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
        paddingTop: '16em',
      },
      [theme.breakpoints.up('xl')]: {
        width: '60%',
        paddingTop: '19em',
      },
    },
    heroBackgroundCurves: {
      backgroundImage: `url(${curves})`,
      backgroundRepeatY: 'no-repeat',
      backgroundSize: '100% 500px',
      width: '100%',
      position: 'absolute',
      bottom: '-2em',
      left: 0,
      right: 0,
      height: '500px',
      // height: { xs: '400px', sm: '500px', md: '500px' },
      zIndex: 10,
      [theme.breakpoints.up('xs')]: {
        height: '400px',
      },
      [theme.breakpoints.up('sm')]: {
        height: '500px',
      },
      [theme.breakpoints.up('md')]: {
        height: '500px',
      },
    },

    divider: {
      backgroundColor: '#fcb900',
      height: '0.2em',
      width: '80%',
      margin: '0.4em auto',
      [theme.breakpoints.down('md')]: {
        width: '80%',
        height: '0.15em',
        margin: '0.25em auto',
      },
    },

    articlesContainer: {
      backgroundImage: theme.palette.background.primary,
      marginBottom: '12em',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'visible',
    },
    aboutUsSection: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: '50%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      marginBottom: '10em',
    },

    aboutGridImg: {
      objectFit: 'cover',
      float: 'right',
      boxSizing: 'border-box',
      boxShadow: '0px 80px 100px -40px rgb(0 0 0 / 30%)',
      marginBottom: '8em',
      [theme.breakpoints.down('md')]: {
        top: 0,
        width: '65%',
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },

    gridImg: {
      objectFit: 'cover',
      boxSizing: 'border-box',
      boxShadow: '0px 80px 100px -40px rgb(0 0 0 / 30%)',
      maxWidth: '100%',
      [theme.breakpoints.up('md')]: {
        width: '120%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '100%',
      },
    },

    articlesWrapper: {
      width: '85%',
      position: 'absolute',
      top: '-6em',
      margin: '0 auto',

      backgroundColor: theme.palette.background.secondary,
      padding: '1.5em',
      [theme.breakpoints.up('lg')]: {
        width: '70%',
        padding: '2.5em',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '1480px',
        padding: '3.5em',
      },
    },
    cardBg: {
      width: '68%',
      margin: '0 auto',
      position: 'relative',
      bottom: '4em',
      backgroundColor: theme.palette.background.secondary,

      [theme.breakpoints.up('sm')]: {
        width: '85%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '65%',
      },
    },
    handImg: {
      marginTop: '-12vh',
      marginBottom: '1em',
      width: '90%',

      [theme.breakpoints.up('sm')]: {
        width: '50%',
        marginBottom: '0',
      },
      [theme.breakpoints.up('md')]: {
        width: '45%',
        marginBottom: '0',
      },
    },
    cardWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      paddingBottom: '2em',

      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
        alignItems: 'center',
      },
    },
    anyDoubtSection: {
      backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: ' 0 12.5%',
      marginBottom: '1em',

      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
        marginBottom: '2em',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '3em',
      },
      [theme.breakpoints.up('xl')]: {
        marginBottom: '5em',
      },
    },
    anyDoubtImg: {
      width: '100%',

      [theme.breakpoints.up('md')]: {
        maxWidth: '50%',
        position: 'relative',
      },
    },
    yellowCard: {
      width: '100%',
      margin: '0 auto',
      padding: '2.6em',
      background: '#FFFBF5',
      marginBottom: '3.5em',
      boxShadow: ' 0px 45px 84px -40px rgb(0 0 0 / 30%)',
      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
        width: '130%',
        top: '-1.9em',
        zIndex: '100',
        right: '5vw',
        position: 'relative',
      },
    },
  };
});

export default useStyles;

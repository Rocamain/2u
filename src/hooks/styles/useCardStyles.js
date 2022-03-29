import { makeStyles } from '@mui/styles';
import image from '../../assets/static/backgrounds/water.jpg';
import backgroundImage from '../../assets/static/backgrounds/bg.jpg';
import backgroundImage2 from '../../assets/static/backgrounds/bg2.jpg';

export const useStyles = makeStyles((theme) => {
  return {
    carousel: {
      height: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },

    slideContainer: {
      width: '100%',
      margin: '0 auto',
      backgroundImage: theme.palette.background.primary,
      paddingBottom: '0.7em',
      paddingTop: '1.5em',
    },
    slideShowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    slideButton: {
      minWidth: '2.7em',
      // position: 'relative',
      // zIndex: 100,
      '&:hover': {
        color: 'pink',
      },
    },
    chevron: {
      color: 'white',
      fontSize: '3.4rem',
      '&:hover': {
        color: 'pink',
      },
    },

    divider: {
      backgroundColor: '#fcb900',
      height: '0.2em',
      width: '30%',
      [theme.breakpoints.down('md')]: {
        width: '80%',
        margin: '2em auto',
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

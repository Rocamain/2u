import { makeStyles } from '@mui/styles';
import image from '../../assets/static/images/water1.jpg';
import backgroundImage from '../../assets/static/images/bg.jpg';
import backgroundImage2 from '../../assets/static/images/bg2.jpg';

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
      position: 'relative',
    },
    chevron: {
      color: 'white',
      fontSize: '3.4rem',
    },

    divider: {
      backgroundColor: '#cc7875',
      height: '0.1rem',
      marginBottom: '2em',
      width: '40%',
    },

    articlesContainer: {
      backgroundImage: theme.palette.background.primary,
      marginTop: '10em',
      marginBottom: '18em',
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

    aboutGridImgShadow: {
      [theme.breakpoints.up('md')]: {
        boxShadow: '20vw 0px 0px 0px #00bccc',

        // width: '110%',
        // marginRight: '50px',
        // position:"relative",
        // left:"-50px"
      },
    },
    aboutGridImg: {
      objectFit: 'cover',
      width: '95vw',
      minHeight: '60%',
      marginRight: '-10vw',
      float: 'right',
      boxSizing: 'border-box',
      boxShadow: '0px 80px 100px -40px rgb(0 0 0 / 30%)',
      marginBottom: '8em',
      [theme.breakpoints.up('sm')]: {
        width: '90%',
      },
      [theme.breakpoints.up('md')]: {
        width: '110%',
      },
    },

    articlesWrapper: {
      width: '85%',
      position: 'absolute',
      top: '-6em',
      margin: '0 auto',
      backgroundColor: theme.palette.background.secondary,
      padding: '1.5em',
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
      marginBottom: '2em',
      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
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
